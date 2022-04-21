import { config } from "@makepurple/config";
import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import NextLink from "next/link";
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
			${theme`colors.blue.500`}
		)
	`};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export type BrandProps = InferComponentProps<typeof Root> & {
	asLink?: boolean;
};

export const Brand = forwardRef<HTMLAnchorElement, BrandProps>((props, ref) => {
	const { asLink = true, href = "/", ...restProps } = props;

	if (!asLink || !href) {
		return (
			<Root as="div" {...StyleUtils.filterHTMLProps(restProps)} ref={ref as any}>
				{config.brand}
			</Root>
		);
	}

	return (
		<NextLink href={href} passHref>
			<Root {...StyleUtils.filterHTMLProps(restProps)} ref={ref}>
				{config.brand}
			</Root>
		</NextLink>
	);
});

Brand.displayName = "Brand";
