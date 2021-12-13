import { InferComponentProps } from "@makepurple/typings";
import { styled } from "goober";
import { MjmlDivider } from "mjml-react";
import React from "react";
import { withCssClass } from "./withCssClass";

export type EmailDividerProps = InferComponentProps<typeof MjmlDivider> & {
	className?: string;
};

export const EmailDivider = styled<EmailDividerProps>(
	withCssClass((props) => (
		<MjmlDivider
			borderColor="#dddddd"
			borderStyle="solid"
			borderWidth={1}
			padding="24px 0"
			{...props}
		/>
	))
)``;

EmailDivider.displayName = "EmailDivider";
