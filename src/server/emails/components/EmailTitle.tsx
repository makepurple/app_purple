import type { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import { EmailColumn } from "./EmailColumn";
import { EmailSection } from "./EmailSection";
import { EmailText } from "./EmailText";

export type EmailTitleProps = InferComponentProps<typeof EmailSection>;

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
