import { styled } from "goober";
import { MjmlColumn, MjmlColumnProps } from "mjml-react";
import React from "react";
import { withCssClass } from "./withCssClass";

export type EmailColumnProps = MjmlColumnProps & {
	className?: string;
};

export const EmailColumn = styled<EmailColumnProps>(
	withCssClass((props: MjmlColumnProps) => <MjmlColumn padding={0} {...props} />)
)``;

EmailColumn.displayName = "EmailColumn";
