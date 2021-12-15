import { InferComponentProps } from "@makepurple/typings";
import NextLink, { LinkProps } from "next/link";
import React, { ElementType, forwardRef, ReactElement } from "react";

export type NextLinkAsProps<T extends ElementType> = Pick<LinkProps, "href"> & {
	as: T;
	forwardedAs: ElementType;
} & InferComponentProps<T>;

// eslint-disable-next-line react/display-name
export const NextLinkAs = forwardRef(
	<T extends ElementType>(props: NextLinkAsProps<T>, ref: any): ReactElement | null => {
		const { as: Type, forwardedAs, href, ...asProps } = props;

		return (
			<NextLink href={href} passHref>
				<Type as={forwardedAs} {...asProps} ref={ref} />
			</NextLink>
		);
	}
) as (<T extends ElementType>(props: NextLinkAsProps<T>) => ReactElement | null) & {
	displayName: string;
};

NextLinkAs.displayName = "NextLinkAs";
