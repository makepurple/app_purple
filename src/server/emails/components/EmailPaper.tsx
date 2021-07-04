import type { InferComponentProps } from "@/client/types";
import { withCssClass } from "@/server/emails/mjml-styled";
import { MjmlWrapper } from "mjml-react";
import styled from "styled-components";

export type EmailPaperProps = InferComponentProps<typeof EmailPaper>;

export const EmailPaper = styled(withCssClass(MjmlWrapper))`
	border-radius: 4px;
	border: 1px solid #dddddd;
	background-color: ${({ theme }) => theme.palette.white};
	overflow: hidden;
`;

EmailPaper.defaultProps = {
	padding: 0
};
