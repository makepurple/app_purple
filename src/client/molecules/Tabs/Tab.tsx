import { Typography } from "@/client/atoms/Typography";
import type { SvgIconComponent } from "@/client/svgs";
import React, { forwardRef } from "react";
import tw, { styled, theme } from "twin.macro";

const Root = styled(Typography)<{ $selected: boolean }>`
	${tw`
		inline-flex
		items-center
		justify-center
		pb-1
		border-0
		border-b-4
		border-solid
		text-lg
		leading-none
		text-black
		cursor-pointer
		no-underline
		hover:border-indigo-500
	`}
	${({ $selected }) =>
		$selected
			? tw`
				border-indigo-500
				font-bold
			`
			: tw`
				border-transparent
				font-medium
			`}
`;

const StyledIcon = tw.svg`
	mr-1.5
`;

type AnchorProps = JSX.IntrinsicElements["a"];

export interface TabProps extends AnchorProps {
	icon?: SvgIconComponent;
	selected?: boolean;
}

export const Tab = forwardRef<HTMLAnchorElement, TabProps>((props, ref) => {
	const { children, icon, selected = false, ...restAnchorProps } = props;

	return (
		<Root as="a" {...(restAnchorProps as any)} ref={ref} $selected={selected}>
			{icon && (
				<StyledIcon as={icon} height={20} width={20} color={theme`colors.indigo.500`} />
			)}
			{children}
		</Root>
	);
});

Tab.displayName = "Tab";
