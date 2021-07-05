import { InferComponentProps } from "@/client/types";
import { config } from "@/config";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

const Root = styled.a`
	line-height: 1em;
	font-size: 24px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primaryText};
	background: ${({ theme }) => css`
		linear-gradient(-70deg, ${theme.palette.red}, ${theme.palette.blue})
	`};
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	cursor: pointer;

	&:hover {
		text-decoration: none;
	}
`;

export type BrandProps = InferComponentProps<typeof Root>;

export const Brand = forwardRef<HTMLAnchorElement, BrandProps>((props, ref) => {
	return (
		<Root {...props} ref={ref}>
			{config.brand}
		</Root>
	);
});

Brand.displayName = "Brand";
