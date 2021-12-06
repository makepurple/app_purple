import { ChevronDownIcon, SvgIconComponentProps } from "@/client/svgs";
import { forwardRef } from "react";
import tw, { styled } from "twin.macro";

const Root = styled(ChevronDownIcon)<{ $open?: boolean }>`
	${tw`
		transform
		transition
		duration-150
		ease-in
	`}

	${({ $open }) =>
		$open &&
		tw`
			rotate-180
		`}
`;

export type ExpandIconProps = SvgIconComponentProps & {
	open?: boolean;
};

export const ExpandIcon = forwardRef<SVGSVGElement, ExpandIconProps>((props, ref) => {
	const { open, ...svgProps } = props;

	return <Root {...svgProps} ref={ref} $open={open} />;
});

ExpandIcon.displayName = "ExpandIcon";
