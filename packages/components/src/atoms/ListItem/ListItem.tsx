import { InferComponentProps } from "@makepurple/typings";
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
		p-3
		border-none
		rounded-md
		whitespace-nowrap
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
		hover:bg-brand/80
	`}

	${({ active }) =>
		active &&
		tw`
			text-white
			bg-brand/80
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
			bg-brand
		`}
`;
