import { Type } from "../types.js";
import { TreeTraverser } from "../core/validator.js";
import { BaseValidator } from "../base/validator.js";
import { RequiredValidator } from "../required/validator.js";
export declare abstract class ValueValidator<T, U extends ValueValidator<T, U>> extends BaseValidator<T, U> {
    protected abstract type: Type;
    private _default;
    private _constValue;
    private _enumValues;
    private _anyOf;
    private _allOf;
    /**
     * ## One fixed value
     *
     * `const` is identical to an `enum` with only one entry, and is used to
     * force an exact value of a type.
     */
    protected const<V extends T>(value: V): unknown;
    /**
     * ## Enumerate values
     *
     * `enum` can be used to specify the exact set of values allowed, and is
     * specified as individual arguments.
     *
     * By default, no enum is specified, meaning any value matching the *type*
     * is allowed.
     */
    protected enum(...values: unknown[]): unknown;
    default(value: T): this;
    required(): RequiredValidator<T, this>;
    protected getConst(): T | undefined;
    protected getConstSchema(): {};
    protected getEnum(): Array<T> | undefined;
    protected getEnumSchema(): {};
    anyOf<V extends BaseValidator<unknown>>(condition: Array<V> | ((v: U) => Array<V>)): this;
    protected getAnyOf(): Array<BaseValidator<unknown>> | undefined;
    protected getAnyOfSchemaObject(traverser: TreeTraverser): {
        anyOf?: undefined;
    } | {
        anyOf: Omit<any, "type">[];
    };
    allOf<V extends BaseValidator<unknown>>(condition: Array<V> | ((v: U) => Array<V>)): this;
    protected getAllOf(): Array<BaseValidator<unknown>> | undefined;
    protected getAllOfSchemaObject(traverser: TreeTraverser): {
        allOf?: undefined;
    } | {
        allOf: Omit<any, "type">[];
    };
    protected getDefault(): T | undefined;
    protected getDefaultSchema(): {
        default?: undefined;
    } | {
        default: T & ({} | null);
    };
    protected getJsonSchemaObject(traverser: TreeTraverser): {
        allOf?: undefined;
        anyOf?: undefined;
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf: Omit<any, "type">[];
        anyOf?: undefined;
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf?: undefined;
        anyOf: Omit<any, "type">[];
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf: Omit<any, "type">[];
        anyOf: Omit<any, "type">[];
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf?: undefined;
        anyOf?: undefined;
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf: Omit<any, "type">[];
        anyOf?: undefined;
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf?: undefined;
        anyOf: Omit<any, "type">[];
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    } | {
        allOf: Omit<any, "type">[];
        anyOf: Omit<any, "type">[];
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    };
    protected setupClone(clean: boolean, clone: U): this;
}
