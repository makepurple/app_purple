import { AlertDialog, Button, ButtonProps } from "@makepurple/components";
import { stripIndents } from "common-tags";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { toast } from "react-hot-toast";
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
			description={stripIndents`
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
