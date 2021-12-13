import React, { FC } from "react";
import { EmailColumn } from "./EmailColumn";
import { EmailSection, EmailSectionProps } from "./EmailSection";
import { EmailText } from "./EmailText";

export type EmailTitleProps = EmailSectionProps;

export const EmailTitle: FC<EmailTitleProps> = ({ children, ...props }) => {
	return (
		<EmailSection {...props}>
			<EmailColumn>
				<EmailText fontSize={24} align="center">
					{children}
				</EmailText>
			</EmailColumn>
		</EmailSection>
	);
};

EmailTitle.displayName = "EmailTitle";
