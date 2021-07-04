import { postmark } from "@/server/services";
import { Logger } from "@/server/utils";
import { stripIndents } from "common-tags";
import type { Message, MessageSendingResponse } from "postmark/dist/client/models";

const postmarkFromEmail = process.env.POSTMARK_FROM_EMAIL;

export type SendEmailMessage = OptionalProps<Message, "From">;

export const sendEmail = async (
	email: SendEmailMessage
): Promise<Maybe<MessageSendingResponse>> => {
	if (process.env.NODE_ENV === "development") {
		Logger.info("Not sending email in development");
		Logger.info(stripIndents`
			To: ${email.To}
			Subject: ${email.Subject}
		`);

		return null;
	}

	if (process.env.NODE_ENV !== "production") {
		return null;
	}

	if (!postmarkFromEmail) {
		return null;
	}

	await postmark.client.sendEmail({
		From: postmarkFromEmail,
		...email
	});

	return undefined;
};
