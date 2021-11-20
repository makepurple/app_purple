import { ObjectUtils } from "@/utils";
import { useSelect, UseSelectProps } from "downshift";
import React, { CSSProperties, FC, ReactNode } from "react";
import tw from "twin.macro";
import { SelectContext } from "./context";
import { SelectDisclosure } from "./SelectDisclosure";
import { SelectOption } from "./SelectOption";
import { SelectOptions } from "./SelectOptions";

const Root = tw.div`
	inline-flex
	relative
`;

export type SelectProps<T> = UseSelectProps<T> & {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
};

const ofType = <T extends any>() => {
	const TypedSelect: FC<SelectProps<T>> = (props) => {
		const { children, className, style, ...selectProps } = props;

		const select = useSelect(selectProps);

		return (
			<SelectContext.Provider value={{ ...select, items: selectProps.items }}>
				<Root className={className} style={style}>
					{children}
				</Root>
			</SelectContext.Provider>
		);
	};

	TypedSelect.displayName = "TypedSelect";

	const component = ObjectUtils.setStatic(TypedSelect, {
		Disclosure: SelectDisclosure,
		Option: SelectOption,
		Options: SelectOptions.ofType<T>()
	});

	return component;
};

const _Select = ofType<any>();

_Select.displayName = "Select";

export const Select = ObjectUtils.setStatic(_Select, {
	ofType
});
