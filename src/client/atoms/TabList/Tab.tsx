import { Tab as ReakitTab } from "reakit";
import tw, { styled } from "twin.macro";

export const Tab = styled(ReakitTab)`
	${tw`
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
		hover:bg-cyan-600
		hover:bg-opacity-10
	`}

	&[aria-selected="true"] {
		${tw`
			shadow
			bg-indigo-500
			text-white
			font-bold

		`}
	}
`;
