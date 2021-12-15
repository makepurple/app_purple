import { Listbox as HUIListbox } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import { FC, Fragment } from "react";

export type SelectOptionProps<T> = Omit<InferComponentProps<typeof HUIListbox.Option>, "value"> & {
	value: T;
};

const ofType = <T extends any>() => {
	const TypedSelectOption: FC<SelectOptionProps<T>> = HUIListbox.Option;

	TypedSelectOption.displayName = "TypedSelectOption";
	TypedSelectOption.defaultProps = {
		as: Fragment
	};

	return TypedSelectOption;
};

const _SelectOption = ofType<any>();

_SelectOption.displayName = "SelectOption";

export const SelectOption = ObjectUtils.setStatic(_SelectOption, {
	ofType
});
