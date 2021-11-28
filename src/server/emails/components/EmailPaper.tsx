import { InferComponentProps } from "@/client/types";
import { styled } from "goober";
import { MjmlWrapper } from "mjml-react";
import React from "react";
import { withCssClass } from "./withCssClass";

export type EmailPaperProps = InferComponentProps<typeof MjmlWrapper> & {
	className?: string;
};

export const EmailPaper = styled<EmailPaperProps>(
	withCssClass((props) => <MjmlWrapper padding={0} {...props} />)
)`
	border-radius: 4px;
	border: 1px solid #dddddd;
	background-color: #ffffff;
	overflow: hidden;
`;

EmailPaper.displayName = "EmailPaper";
