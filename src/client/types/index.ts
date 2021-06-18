import { ComponentType, ElementType } from "react";

export type InferComponentProps<T extends ElementType> = T extends ComponentType<infer U>
	? U
	: T extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[T]
	: {};
