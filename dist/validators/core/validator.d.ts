import { AnnotationsHolder } from "../../annotations.js";
import { AnyType } from "../types.js";
export interface TreeTraverser {
    visit(validator: CoreValidator<unknown>): any;
    getSchema(): {
        schema: any;
        duplicates: Map<string, number>;
    };
    currentSchemaName: string | undefined;
}
export declare abstract class CoreValidator<T> {
    protected _annotations: AnnotationsHolder | undefined;
    protected abstract toSchema(traverser: TreeTraverser): any;
    protected abstract clone(clean?: boolean): this;
    protected abstract type: AnyType;
    protected getJsonSchemaObject(traverser: TreeTraverser): {
        examples?: string[] | undefined;
        description?: string | undefined;
        title?: string | undefined;
    };
}
export declare abstract class InternalCoreValidator extends CoreValidator<unknown> {
    _annotations: AnnotationsHolder | undefined;
    abstract type: AnyType;
    abstract toSchema(traverser: TreeTraverser): any;
    abstract clone(clean?: boolean): this;
}
export declare function exposeCoreValidator<T extends CoreValidator<unknown>>(validator: T): InternalCoreValidator;
