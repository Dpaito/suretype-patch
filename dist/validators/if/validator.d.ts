import { AnyType } from "../types.js";
import { CoreValidator, TreeTraverser } from "../core/validator.js";
import { BaseValidator } from "../base/validator.js";
import { TypeOf } from "../functional.js";
import { RequiredValidator } from "../required/validator.js";
export declare class ElseValidator<T> extends BaseValidator<T, ElseValidator<T>> {
    protected type: AnyType;
    protected _if: undefined | CoreValidator<unknown>;
    protected _then: undefined | CoreValidator<unknown>;
    protected _else: undefined | CoreValidator<unknown>;
    protected constructor();
    required(): RequiredValidator<T, this>;
    protected toSchema(traverser: TreeTraverser): {
        else?: any;
        then?: any;
        if: any;
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    };
    protected clone(clean?: boolean): this;
}
export declare class ThenValidator<T> extends ElseValidator<T> {
    protected type: AnyType;
    protected constructor();
    else<U extends CoreValidator<unknown>>(validator: U): ElseValidator<T | TypeOf<U>>;
    protected clone(clean?: boolean): this;
}
export declare class IfValidator<T> extends ThenValidator<unknown> {
    protected type: AnyType;
    protected _if: CoreValidator<unknown>;
    constructor(validator: CoreValidator<T>);
    then<U extends CoreValidator<unknown>>(validator: U): ThenValidator<TypeOf<U>>;
    protected clone(clean?: boolean): this;
}
