import { config } from "@makepurple/config";
import { InferComponentProps } from "@makepurple/typings";
import { oneLine } from "common-tags";
import React, { forwardRef } from "react";
import tw, { styled, theme } from "twin.macro";

const Root = styled.a`
	${tw`
		text-2xl
		leading-none
		font-semibold
		text-black
		cursor-pointer
		hover:no-underline
	`}
	background: ${oneLine`
		linear-gradient(
			-80deg,
			${theme`colors.pink.600`},
			${theme`colors.violet.600`},
			${theme`colors.blue.500`})
	`};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
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
