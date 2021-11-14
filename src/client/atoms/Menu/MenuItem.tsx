import { InferComponentProps } from "@/client/types";
import { MenuItem as ReakitMenuItem } from "reakit";
import tw, { styled } from "twin.macro";

export type MenuItemProps = InferComponentProps<typeof MenuItem>;

export const MenuItem = styled(ReakitMenuItem)<{ selected?: boolean }>`
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
		text-purple-800
		bg-transparent
		hover:bg-gray-50
		hover:bg-opacity-80
		transition
		duration-150
		ease-in-out
		cursor-pointer
	`}

	${({ selected }) =>
		selected &&
		tw`
			text-white
			bg-indigo-500
			hover:bg-indigo-500
		`}
`;

MenuItem.defaultProps = {
	type: "button"
};
