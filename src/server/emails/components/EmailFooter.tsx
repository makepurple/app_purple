import { config } from "@/config";
import React, { FC } from "react";
import { EmailColumn } from "./EmailColumn";
import { EmailDivider } from "./EmailDivider";
import { EmailSection, EmailSectionProps } from "./EmailSection";
import { EmailText } from "./EmailText";

export type EmailFooterProps = EmailSectionProps;

export const EmailFooter: FC<EmailFooterProps> = ({ ...props }) => {
	return (
		<EmailSection paddingRight={64} paddingLeft={64} paddingBottom={48} {...props}>
			<EmailColumn>
				<EmailDivider />
				<EmailText fontSize={12} color="#8898aa">
					You&apos;re receiving this email because you&apos;re a member of {config.brand}.
				</EmailText>
			</EmailColumn>
		</EmailSection>
	);
};

EmailFooter.displayName = "EmailFooter";
