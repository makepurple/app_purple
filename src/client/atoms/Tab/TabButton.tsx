import { InferComponentProps } from "@/client/types";
import { m } from "framer-motion";
import tw, { styled } from "twin.macro";

export type TabButtonProps = InferComponentProps<typeof TabButton>;

const Selection = styled(m.div)`
	${tw`
		hidden
		absolute
		inset-0
		bg-indigo-500
		rounded-md
	`}
`;

const Content = tw.span`
	absolute
	inset-0
	inline-flex
	items-center
	justify-center
	truncate
	z-index[1]
`;

export const TabButton = styled.button.attrs<{ selected?: boolean }>(({ children, selected }) => ({
	"aria-selected": selected,
	children: (
		<>
			{selected && <Selection initial={false} layoutId="tabButton" />}
			<Content>{children}</Content>
		</>
	)
}))`
	${tw`
		relative
		flex-shrink-0
		inline-flex
		items-center
		justify-center
		m-0.5
		h-14
		rounded-lg
		text-lg
		font-medium
		leading-none
		text-black
		cursor-pointer
		no-underline
		transition-colors
		delay-75
		duration-75
		ease-linear
		hover:text-white
		hover:bg-indigo-500
		hover:bg-opacity-80
	`}

	&[aria-selected="true"] {
		& ${Selection} {
			${tw`block`}
		}

		${tw`
			shadow
			text-white
			font-bold
			bg-opacity-100
		`}
	}
`;

TabButton.defaultProps = {
	type: "button"
};
