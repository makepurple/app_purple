import { Button, ButtonProps } from "@makepurple/components";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { toast } from "react-hot-toast";
import { useLeaveChatMutation } from "../../graphql";

export type ChatRoomLeaveButtonProps = ButtonProps & {
	chatId: string;
};

export const ChatRoomLeaveButton: FC<ChatRoomLeaveButtonProps> = (props) => {
	const { chatId, disabled, onClick, type = "button", ...restProps } = props;

	const router = useRouter();

	const [{ fetching }, leaveChat] = useLeaveChatMutation();

	return (
		<Button
			{...restProps}
			disabled={fetching || disabled}
			onClick={async (e) => {
				onClick?.(e);

				const confirmed = confirm("Are you sure you want to leave this chat?");

				if (!confirmed) return;

				const didSucceed = await leaveChat({ chatId })
					.then((result) => !!result.data?.leaveChat)
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Error while attempting to leave the chat");

					return;
				}

				await router.push("/messaging/[[...slug]]", "/messaging");
			}}
			type={type}
		/>
	);
};
