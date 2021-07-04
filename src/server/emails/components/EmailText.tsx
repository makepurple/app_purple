import type { InferComponentProps } from "@/client/types";
import { withCssClass } from "@/server/emails/mjml-styled";
import { MjmlText } from "mjml-react";
import styled from "styled-components";

export type EmailTextProps = InferComponentProps<typeof EmailText>;

export const EmailText = styled(withCssClass(MjmlText))`
	&,
	& * {
		font-family: Gilroy, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
	}
`;

EmailText.defaultProps = {
	padding: 0,
	fontSize: 15
};
