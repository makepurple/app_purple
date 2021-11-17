import { InferComponentProps } from "@/client/types";
import { m } from "framer-motion";
import { Tab as ReakitTab } from "reakit";
import tw, { styled } from "twin.macro";

const Selection = styled(m.div)`
	${tw`
		hidden
		absolute
		inset-0
		bg-indigo-500
		z-index[-1]
		rounded-md
	`}
`;

export type TabProps = InferComponentProps<typeof ReakitTab>;

export const Tab = styled(ReakitTab).attrs<TabProps>(({ children, id, selectedId }) => ({
	children: (
		<>
			{id === selectedId && <Selection initial={false} layoutId="tab" />}
			{children}
		</>
	)
}))<TabProps>`
	${tw`
		relative
		inline-flex
		items-center
		justify-center
		p-4
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
		hover:bg-cyan-600
		hover:bg-opacity-10
	`}

	&[aria-selected="true"] {
		& ${Selection} {
			${tw`block`}
		}

		${tw`
			text-white
			shadow
			font-bold
		`}
	}
`;
