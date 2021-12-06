import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import { Listbox as HUIListbox } from "@headlessui/react";
import { FC } from "react";

export type SelectOptionProps<T> = Omit<InferComponentProps<typeof HUIListbox.Option>, "value"> & {
	value: T;
};

const ofType = <T extends any>() => {
	const TypedSelectOption: FC<SelectOptionProps<T>> = HUIListbox.Option;

	TypedSelectOption.displayName = "TypedSelectOption";

	return TypedSelectOption;
};

const _SelectOption = ofType<any>();

_SelectOption.displayName = "SelectOption";

export const SelectOption = ObjectUtils.setStatic(_SelectOption, {
	ofType
});
