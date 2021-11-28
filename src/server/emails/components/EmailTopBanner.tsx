import { styled } from "goober";
import React, { FC } from "react";
import { EmailColumn } from "./EmailColumn";
import { EmailImage } from "./EmailImage";
import { EmailSection, EmailSectionProps } from "./EmailSection";

const Root = styled(EmailSection)`
	background-color: #6366f1;
`;

export type EmailTopBannerProps = EmailSectionProps;

export const EmailTopBanner: FC<EmailTopBannerProps> = ({ ...props }) => {
	return (
		<Root {...props}>
			<EmailColumn>
				<EmailImage src="/static/pngs/email-top-clip.png" width={600} />
			</EmailColumn>
		</Root>
	);
};

EmailTopBanner.displayName = "EmailTopBanner";
