import { Typography } from "@/client/atoms";
import type { SvgIconComponent } from "@/client/svgs";
import React, { forwardRef } from "react";
import styled, { useTheme } from "styled-components";

const Root = styled(Typography)<{ $selected: boolean }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding-bottom: 0.25rem;
	border-bottom: 4px solid
		${({ $selected, theme }) => ($selected ? theme.palette.purple : "transparent")};
	line-height: 1em;
	font-weight: ${({ $selected }) => ($selected ? 700 : 500)};
	color: ${({ theme }) => theme.colors.primaryText};
	cursor: pointer;
	text-decoration: none;
`;

const StyledIcon = styled.svg`
	margin-right: 4px;
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
		<Root as="a" {...restAnchorProps} ref={ref} $selected={selected}>
			{icon && <StyledIcon as={icon} height={16} width={16} color={theme.palette.purple} />}
			{children}
		</Root>
	);
});

Tab.displayName = "Tab";
