import { AlertDialog, Button, ButtonProps, toast } from "@makepurple/components";
import { oneLine } from "common-tags";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useLeaveChatMutation } from "../../graphql";

export type ChatRoomLeaveButtonProps = ButtonProps & {
	chatId: string;
};

export const ChatRoomLeaveButton: FC<ChatRoomLeaveButtonProps> = (props) => {
	const { chatId, disabled, type = "button", ...restProps } = props;

	const router = useRouter();

	const [{ fetching }, leaveChat] = useLeaveChatMutation();

	return (
		<AlertDialog
			description={oneLine`
				Are you sure you want to leave this chat? You can only rejoin if invited again.
			`}
			onConfirm={async () => {
				const didSucceed = await leaveChat({ chatId })
					.then((result) => !!result.data?.leaveChat)
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Error while attempting to leave the chat");

					return;
				}

				await router.push("/messaging/[[...slug]]", "/messaging");
			}}
			text="Yes, leave chat"
		>
			<Button {...restProps} disabled={fetching || disabled} type={type} />
		</AlertDialog>
	);
};
