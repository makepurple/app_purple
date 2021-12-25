import React, { forwardRef } from "react";
import { Anchor, AnchorProps } from "../Anchor";

export type MaybeAnchorProps = Omit<AnchorProps, "href"> & {
	href?: Maybe<string>;
};

export const MaybeAnchor = forwardRef<HTMLAnchorElement, MaybeAnchorProps>((props, ref) => {
	const { href, rel, target, ...restProps } = props;

	if (!href) return <span {...restProps} ref={ref} />;

	return <Anchor {...props} ref={ref} href={href} />;
});

MaybeAnchor.displayName = "MaybeAnchor";
