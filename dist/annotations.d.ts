import { CoreValidator } from "./validators/core/validator.js";
export interface Annotations {
    name?: string;
    title?: string;
    description?: string;
    examples?: Array<string>;
}
export type TopLevelAnnotations = Omit<Annotations, 'name'> & Required<Pick<Annotations, 'name'>>;
export declare class AnnotationsHolder {
    options: Annotations;
    constructor(options: Annotations);
}
export declare function annotateValidator<T extends CoreValidator<unknown>>(validator: T, annotations: AnnotationsHolder): T;
export declare function getAnnotations<T extends CoreValidator<unknown>>(validator: T): Annotations | undefined;
export declare function getName<T extends CoreValidator<unknown>>(validator: T): string | undefined;
export declare function getNames<T extends CoreValidator<unknown>>(validator: T): Array<string>;
