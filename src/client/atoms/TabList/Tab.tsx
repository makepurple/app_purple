import { Tab as ReakitTab } from "reakit";
import tw, { styled } from "twin.macro";

export const Tab = styled(ReakitTab)`
	${tw`
		inline-flex
		items-center
		justify-center
		pb-1
		border-0
		border-b-4
		border-solid
		border-transparent
		text-lg
		font-medium
		leading-none
		text-black
		cursor-pointer
		no-underline
		hover:border-cyan-600
		hover:text-cyan-600
	`}

	&[aria-selected="true"] {
		${tw`
			border-indigo-500
			font-bold
		`}
	}
`;
