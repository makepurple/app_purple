import { InferComponentProps } from "@makepurple/typings";
import { oneLine } from "common-tags";
import React, { forwardRef } from "react";
import tw, { styled, theme } from "twin.macro";

const Root = styled.a<{ $border?: number }>`
	${tw`
		relative
		inline-flex
		flex-row
		items-stretch
		justify-items-stretch
		rounded-full
		border-solid
		border-transparent
		cursor-pointer
	`}

	background-clip: padding-box;
	-webkit-background-clip: padding-box;
	border-width: ${({ $border }) => $border}px;

	&:before {
		${tw`
			content
			absolute
			inset-0
		`}
		margin: ${({ $border }) => -($border ?? 0)}px;
		border-radius: inherit;
		background: ${oneLine`
			linear-gradient(
				-80deg,
				${theme`colors.pink.600`},
				${theme`colors.violet.600`},
				${theme`colors.blue.500`})
		`};
	}
`;

const Content = tw.div`
	flex
	items-stretch
	justify-items-stretch
	overflow-hidden
	border-radius[inherit]
`;

export type AvatarProps = InferComponentProps<"a"> & {
	border?: number;
};

export const Avatar = forwardRef<HTMLAnchorElement, AvatarProps>((props, ref) => {
	const { border, children, href, ...restAnchorProps } = props;

	const Type = href ? "a" : "div";

	return (
		<Root {...restAnchorProps} as={Type} ref={ref} href={href} $border={border}>
			<Content>{children}</Content>
		</Root>
	);
});

Avatar.displayName = "Avatar";

Avatar.defaultProps = {
	border: 0
};
