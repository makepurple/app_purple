import { postmark } from "./postmark";

export interface SendEmailParams {
	to: string;
	subject: string;
	body: string;
}

export const sendEmail = async (email: SendEmailParams): Promise<boolean> => {
	if (process.env.NODE_ENV !== "production") return true;

	if (!process.env.POSTMARK_FROM_EMAIL) {
		throw new Error('Missing "from" field for sending emails!');
	}

	await postmark.sendEmail({
		From: process.env.POSTMARK_FROM_EMAIL,
		Subject: email.subject,
		To: email.to,
		HtmlBody: email.body
	});

	return false;
};
