import { Typography } from "@/client/atoms/Typography";
import type { SvgIconComponent } from "@/client/svgs";
import React, { forwardRef } from "react";
import { useTheme } from "styled-components";
import tw, { styled } from "twin.macro";

const Root = styled(Typography)<{ $selected: boolean }>`
	${tw`
		inline-flex
		items-center
		justify-center
		pb-1
		border-0
		border-b-4
		border-solid
		leading-none
		text-black
		cursor-pointer
		no-underline
	`}
	${({ $selected }) =>
		$selected
			? tw`
				border-purple-500
				font-bold
			`
			: tw`
				border-transparent
				font-medium
			`}
`;

const StyledIcon = tw.svg`
	mr-1
`;

type AnchorProps = JSX.IntrinsicElements["a"];

export interface TabProps extends AnchorProps {
	icon?: SvgIconComponent;
	selected?: boolean;
}

export const Tab = forwardRef<HTMLAnchorElement, TabProps>((props, ref) => {
	const { children, icon, selected = false, ...restAnchorProps } = props;

	const theme = useTheme();

	return (
		<Root as="a" {...(restAnchorProps as any)} ref={ref} $selected={selected}>
			{icon && <StyledIcon as={icon} height={16} width={16} color={theme.palette.purple} />}
			{children}
		</Root>
	);
});

Tab.displayName = "Tab";
