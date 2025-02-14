import { Type } from "../types.js";
import { TreeTraverser } from "../core/validator.js";
import { ValueValidator } from "../value/validator.js";
export declare class BooleanValidator<T extends boolean = boolean> extends ValueValidator<T, BooleanValidator<T>> {
    protected type: Type;
    const<V extends T>(value: V): BooleanValidator<V>;
    enum<V extends T[]>(...values: V): BooleanValidator<V[number]>;
    protected toSchema(traverser: TreeTraverser): {
        allOf?: undefined;
        anyOf?: undefined;
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        allOf: Omit<any, "type">[];
        anyOf?: undefined;
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        allOf?: undefined;
        anyOf: Omit<any, "type">[];
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        allOf: Omit<any, "type">[];
        anyOf: Omit<any, "type">[];
        default?: undefined;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        allOf?: undefined;
        anyOf?: undefined;
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        allOf: Omit<any, "type">[];
        anyOf?: undefined;
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
        allOf?: undefined;
        anyOf: Omit<any, "type">[];
        default: T & ({} | null);
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
        type: string;
    } | {
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
