
declare module "*.svg" {
	import { FC, SVGAttributes } from "react";

	export const ReactComponent: FC<SVGAttributes<SVGElement>>;

	const svgUrl: string;

	export default svgUrl;
}

declare type Maybe<T> = T | null | undefined;
declare type MaybePromise<T> = Promise<T> | T;
declare type MaybeReadonlyArray<T> = T[] | readonly T[];

declare type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends Array<infer U>
		? Array<DeepPartial<U>>
		: T[P] extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: DeepPartial<T[P]>
};

declare type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };
