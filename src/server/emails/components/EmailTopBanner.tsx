import type { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import styled from "styled-components";
import { EmailColumn } from "./EmailColumn";
import { EmailImage } from "./EmailImage";
import { EmailSection } from "./EmailSection";

const Root = styled(EmailSection)`
	background-color: ${({ theme }) => theme.palette.brightPurple};
`;

export type EmailTopBannerProps = InferComponentProps<typeof Root>;

export const EmailTopBanner: FC<EmailTopBannerProps> = ({ ...props }) => {
	return (
		<Root {...props}>
			<EmailColumn>
				<EmailImage src="/pngs/email-top-clip.png" width={600} />
			</EmailColumn>
		</Root>
	);
};
