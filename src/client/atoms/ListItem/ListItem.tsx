import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type ListItemProps = InferComponentProps<typeof ListItem>;

export const ListItem = styled.li<{
	active?: boolean;
	disabled?: boolean;
	selected?: boolean;
}>`
	${tw`
		flex
		items-center
		py-2
		px-3
		border-none
		rounded-md
		text-base
		leading-none
		font-semibold
		text-black
		bg-transparent
		transition
		duration-150
		ease-in-out
		cursor-pointer
		disabled:cursor-not-allowed
		hover:text-white
		hover:bg-indigo-500
	`}

	${({ active }) =>
		active &&
		tw`
			text-white
			bg-indigo-400
		`}

	${({ disabled }) =>
		disabled &&
		tw`
			cursor-not-allowed
		`}

	${({ selected }) =>
		selected &&
		tw`
			text-white
			bg-indigo-500
		`}
`;
