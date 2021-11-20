import { Paper } from "@/client/atoms";
import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import React, { ComponentType, FC, ReactNode, useContext } from "react";
import tw, { styled } from "twin.macro";
import { SelectContext } from "./context";

const Root = styled(Paper)<{ $hidden: boolean }>`
	${tw`
		absolute
		inset-x-0
		bottom-0
		transform
		translate-y-full
		empty:hidden
	`}
	z-index: ${getZIndex("menu")};

	${({ $hidden }) =>
		$hidden &&
		tw`
			hidden
		`}
`;

export type SelectionOptionsRenderProps<T> = {
	items: T[];
};

export type SelectOptionsProps<T extends any> = Omit<InferComponentProps<"ul">, "children"> & {
	as?: string | ComponentType<any>;
	children?: (props: SelectionOptionsRenderProps<T>) => ReactNode;
};

const ofType = <T extends any>() => {
	const TypedSelectOptions: FC<SelectOptionsProps<T>> = (props) => {
		const { as = "ul", children, ...ulProps } = props;

		const select = useContext(SelectContext);

		const isOpen = select?.isOpen;
		const items = select?.items ?? [];

		return (
			<Root
				as={as}
				{...ulProps}
				{...select?.getMenuProps({ ...ulProps })}
				$hidden={!select?.isOpen}
			>
				{isOpen && children?.({ items })}
			</Root>
		);
	};

	TypedSelectOptions.displayName = "TypedSelectOptions";

	return TypedSelectOptions;
};

const _SelectOptions = ofType<any>();

_SelectOptions.displayName = "SelectOptions";

export const SelectOptions = ObjectUtils.setStatic(_SelectOptions, {
	ofType
});
