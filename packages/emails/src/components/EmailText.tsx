import { InferComponentProps } from "@makepurple/typings";
import { styled } from "goober";
import { MjmlText } from "mjml-react";
import React from "react";
import { withCssClass } from "./withCssClass";

export type EmailTextProps = InferComponentProps<typeof MjmlText> & {
	className?: string;
};

export const EmailText = styled<EmailTextProps>(
	withCssClass((props) => <MjmlText fontSize={15} padding={0} {...props} />)
)`
	&,
	& * {
		font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
			Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
	}
`;

EmailText.displayName = "EmailText";
