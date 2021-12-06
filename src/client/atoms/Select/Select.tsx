import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import { Listbox as HUIListbox } from "@headlessui/react";
import { FC } from "react";
import tw, { styled } from "twin.macro";
import { SelectButton } from "./SelectButton";
import { SelectOption } from "./SelectOption";
import { SelectOptions } from "./SelectOptions";

const Root = styled(HUIListbox)`
	${tw`
		relative
		inline-flex
		items-stretch
	`}

	& > * {
		${tw`
			first:flex-grow
		`}
	}
`;

export type SelectProps<T> = Omit<InferComponentProps<typeof HUIListbox>, "onChange" | "value"> & {
	value: T;
	onChange: (value: T) => void;
};

const ofType = <T extends any>() => {
	const TypedSelect: FC<SelectProps<T>> = Root;

	TypedSelect.displayName = "TypedSelect";
	TypedSelect.defaultProps = {
		forwardedAs: "div"
	};

	const component = ObjectUtils.setStatic(TypedSelect, {
		Button: SelectButton,
		Option: SelectOption.ofType<T>(),
		Options: SelectOptions
	});

	return component;
};

const _Select = ofType<any>();

_Select.displayName = "Select";

export const Select = ObjectUtils.setStatic(_Select, {
	ofType
});
