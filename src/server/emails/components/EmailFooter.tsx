import type { InferComponentProps } from "@/client/types";
import { config } from "@/config";
import React, { FC } from "react";
import { EmailColumn } from "./EmailColumn";
import { EmailDivider } from "./EmailDivider";
import { EmailSection } from "./EmailSection";
import { EmailText } from "./EmailText";

export type EmailFooterProps = InferComponentProps<typeof EmailSection>;

export const EmailFooter: FC<EmailFooterProps> = ({ ...props }) => {
	return (
		<EmailSection {...props}>
			<EmailColumn>
				<EmailDivider padding="24px 0" />
				<EmailText fontSize={12} color="#8898aa">
					You&apos;re receiving this email because you&apos;re a member of {config.brand}.
				</EmailText>
			</EmailColumn>
		</EmailSection>
	);
};

EmailFooter.defaultProps = {
	paddingRight: 64,
	paddingLeft: 64,
	paddingBottom: 48
};
