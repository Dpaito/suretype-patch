import { Type } from "../types.js";
import { CoreValidator, TreeTraverser } from "../core/validator.js";
import { ValueValidator } from "../value/validator.js";
import { AdditionalProperties, TypeOf } from "../functional.js";
export declare class ObjectValidator<T extends {}> extends ValueValidator<T, ObjectValidator<T>> {
    protected type: Type;
    private _properties;
    private _additional;
    constructor(properties: {
        [key: string]: CoreValidator<unknown>;
    });
    protected chainedAdditional(): CoreValidator<unknown> | boolean;
    const<V extends T>(value: V): ObjectValidator<V>;
    enum<V extends T>(...values: (keyof V extends keyof T ? V[] : T[])): ObjectValidator<typeof values[number]>;
    /**
     * ## How to handle additional properties not individually specified.
     *
     * ### This can be set to:
     *   * **`true`**: Any additional properties are allowed *(default)*
     *   * **`false`**: No additional properties are allowed
     *   * **a sub-validator**: Additional properties are allowed of a certain
     * 	   type
     */
    additional(type: false): this;
    additional(type: true): ObjectValidator<AdditionalProperties<T, unknown>>;
    additional<U extends CoreValidator<unknown>>(type: U): ObjectValidator<AdditionalProperties<T, TypeOf<U>>>;
    protected toSchema(traverser: TreeTraverser): {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf?: undefined;
        anyOf?: undefined;
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf: Omit<any, "type">[];
        anyOf?: undefined;
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf?: undefined;
        anyOf: Omit<any, "type">[];
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf: Omit<any, "type">[];
        anyOf: Omit<any, "type">[];
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf?: undefined;
        anyOf?: undefined;
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf: Omit<any, "type">[];
        anyOf?: undefined;
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf?: undefined;
        anyOf: Omit<any, "type">[];
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        additionalProperties?: any;
        required?: string[] | undefined;
        properties?: any;
        allOf: Omit<any, "type">[];
        anyOf: Omit<any, "type">[];
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    };
    protected clone(clean?: boolean): this;
}
