import { InferComponentProps } from "@/client/types";
import { styled } from "goober";
import { MjmlSection } from "mjml-react";
import React from "react";
import { withCssClass } from "./withCssClass";

export type EmailSectionProps = InferComponentProps<typeof MjmlSection> & {
	className?: string;
};

export const EmailSection = styled<EmailSectionProps>(
	withCssClass((props) => <MjmlSection padding={0} {...props} />)
)``;

EmailSection.displayName = "EmailSection";
