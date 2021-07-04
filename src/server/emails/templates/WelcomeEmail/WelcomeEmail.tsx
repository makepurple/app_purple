import { config } from "@/config";
import {
	EmailBase,
	EmailColumn,
	EmailContent,
	EmailFooter,
	EmailPaper,
	EmailText,
	EmailTitle,
	EmailTopBanner
} from "@/server/emails/components";
import React, { FC } from "react";

export interface WelcomeEmailProps {
	username: string;
}

export const WelcomeEmail: FC<WelcomeEmailProps> = ({ username = "DenverCoder9" }) => {
	return (
		<EmailBase preview={`Welcome to ${config.brand}!`} title={`Welcome to ${config.brand}!`}>
			<EmailPaper>
				<EmailTopBanner />
				<EmailTitle>Welcome to {config.brand}!</EmailTitle>
				<EmailContent>
					<EmailColumn>
						<EmailText>Hey {username}!</EmailText>
						<EmailText paddingTop={24}>Thanks for signing up for an account!</EmailText>
						<EmailText paddingTop={24}>
							I&apos;m David, the creator of {config.brand}, and I want to welcome you
							to the platform.
						</EmailText>
						<EmailText paddingTop={24}>
							I hope we can help you create great professional partnerships, where you
							can learn from and build great things with eachother!
						</EmailText>
						<EmailText paddingTop={24}>Cheers,</EmailText>
						<EmailText paddingTop={8}>David</EmailText>
						<EmailText paddingTop={24}>
							P.S. If you have any feedback or questions, please ping me so that we
							can we can work to improve your experience.
						</EmailText>
					</EmailColumn>
				</EmailContent>
				<EmailFooter />
			</EmailPaper>
		</EmailBase>
	);
};

WelcomeEmail.displayName = "WelcomeEmail";
