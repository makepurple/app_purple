import { define, is, Struct } from "superstruct";

export const not = <
	TNot extends string | number | Date | any[] | Map<any, any> | Set<any>,
	TIs = TNot
>(
	name: string,
	struct: Struct<TNot>
): Struct<TIs> => define<TIs>(name, (value: any) => !is(value, struct));
