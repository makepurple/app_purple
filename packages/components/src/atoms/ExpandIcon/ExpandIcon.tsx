import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef } from "react";
import tw, { styled } from "twin.macro";
import { ChevronDownIcon } from "../../svgs";

const Root = styled(ChevronDownIcon)<{ $open?: boolean }>`
	${tw`
		transform
		transition
		duration-150
		ease-in
		text-black
	`}

	${({ $open }) =>
		$open &&
		tw`
			rotate-180
		`}
`;

export type ExpandIconProps = InferComponentProps<"svg"> & {
	open?: boolean;
};

export const ExpandIcon = forwardRef<SVGSVGElement, ExpandIconProps>((props, ref) => {
	const { open, ...svgProps } = props;

	return <Root {...svgProps} ref={ref} $open={open} />;
});

ExpandIcon.displayName = "ExpandIcon";
