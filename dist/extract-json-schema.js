import { DuplicateError } from "./errors.js";
import { getName, getNames } from "./annotations.js";
import { TreeTraverserImpl } from "./tree-traverser.js";
import { getRaw } from "./validators/raw/validator.js";
import { uniqValidators } from "./validation.js";
/**
 * Get the JSON schema (as a JavaScript object) for an array of schema
 * validators.
 *
 * @param validators The validators to get the JSON schema from.
 */
export function extractJsonSchema(validators, { refMethod = 'ref-all', onTopLevelNameConflict = 'error', onNonSuretypeValidator = 'error', } = {}) {
    if (onNonSuretypeValidator === 'ignore') {
        validators = validators.filter(validator => getName(validator));
    }
    else if (onNonSuretypeValidator === 'error') {
        validators.forEach(validator => {
            if (!getName(validator))
                throw new TypeError("Got unnamed validator");
        });
    }
    validators = uniqValidators(validators);
    if (onTopLevelNameConflict === 'error') {
        const nameSet = new Set();
        validators
            .map(validator => getNames(validator))
            .filter(v => v.length > 0)
            .forEach(names => {
            for (const name of names) {
                if (nameSet.has(name))
                    throw new DuplicateError(`Duplicate validators found with name "${name}"`);
                nameSet.add(name);
            }
        });
    }
    const traverser = new TreeTraverserImpl(validators, refMethod, onNonSuretypeValidator === 'lookup');
    const { schema, lookup } = traverser.getSchema();
    const schemaRefName = new Map();
    Object
        .entries(schema.definitions)
        .forEach(([name, schema]) => {
        schemaRefName.set(schema, name);
    });
    return { schema, lookup, schemaRefName };
}
/**
 * Get the JSON schema (as a JavaScript object) for a single schema validator.
 *
 * @param validator The validator to get the JSON schema from.
 * @returns { schema, fragment } where either schema is a single schema and
 *          fragment is undefined, or schema is a definition schema (with
 *          multiple fragments) and fragment specifies the specific fragment.
 */
export function extractSingleJsonSchema(validator) {
    const raw = getRaw(validator);
    if (raw)
        return { schema: raw.toSchema(), fragment: raw.fragment };
    const { schema: { definitions } } = extractJsonSchema([validator], {
        refMethod: 'no-refs',
        onNonSuretypeValidator: 'create-name',
        onTopLevelNameConflict: 'rename',
    });
    return { schema: Object.values(definitions)[0] };
}
