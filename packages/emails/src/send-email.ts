import type { Message, MessageSendingResponse } from "postmark/dist/client/models";
import { postmark } from "./postmark";

export type SendEmailMessage = OptionalProps<Message, "From">;

export const sendEmail = async (
	email: SendEmailMessage
): Promise<Maybe<MessageSendingResponse>> => {
	if (process.env.NODE_ENV !== "production") return null;

	if (!process.env.POSTMARK_FROM_EMAIL) return null;

	await postmark.sendEmail({
		From: process.env.POSTMARK_FROM_EMAIL,
		...email
	});

	return undefined;
};
