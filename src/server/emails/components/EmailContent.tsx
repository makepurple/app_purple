import { styled } from "goober";
import React from "react";
import { EmailSection, EmailSectionProps } from "./EmailSection";

export type EmailContentProps = EmailSectionProps & {
	className?: string;
};

export const EmailContent = styled<EmailContentProps>((props) => (
	<EmailSection
		paddingTop={20}
		paddingBottom={20}
		paddingLeft={24}
		paddingRight={24}
		{...props}
	/>
))``;

EmailContent.displayName = "EmailContent";
