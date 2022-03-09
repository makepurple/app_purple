import { InferComponentProps } from "@makepurple/typings";
import NextLink, { LinkProps } from "next/link";
import React, { forwardRef } from "react";

export type NextLinkAnchorProps = Omit<InferComponentProps<"a">, "as" | "href"> &
	Pick<LinkProps, "href"> & { hrefAs?: LinkProps["as"] };

export const NextLinkAnchor = forwardRef<HTMLAnchorElement, NextLinkAnchorProps>((props, ref) => {
	const { href, hrefAs, ...restProps } = props;

	return (
		<NextLink href={href} as={hrefAs as string} passHref>
			<a {...restProps} ref={ref} />
		</NextLink>
	);
});

NextLinkAnchor.displayName = "NextLinkAnchor";
