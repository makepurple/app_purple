import { InferComponentProps } from "@makepurple/typings";
import tw, { styled } from "twin.macro";

export type NotificationCardBaseProps = InferComponentProps<typeof NotificationCardBase>;

export const NotificationCardBase = styled.div<{ unread: boolean }>`
	${tw`
		flex
		items-center
		h-24
		px-4
		border-l-4
		border-solid
		border-transparent
		cursor-pointer
		active:bg-violet-50
	`}

	${({ unread }) =>
		unread &&
		tw`
			border-violet-500
			bg-violet-50
		`}
`;
