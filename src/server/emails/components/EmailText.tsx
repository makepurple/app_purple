import type { InferComponentProps } from "@/client/types";
import { MjmlText } from "mjml-react";
import styled from "styled-components";
import { withCssClass } from "./withCssClass";

export type EmailTextProps = InferComponentProps<typeof EmailText>;

export const EmailText = styled(withCssClass(MjmlText))`
	&,
	& * {
		font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
	}
`;

EmailText.defaultProps = {
	padding: 0,
	fontSize: 15
};
