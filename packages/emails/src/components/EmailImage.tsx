import { InferComponentProps } from "@makepurple/typings";
import { styled } from "goober";
import { MjmlImage } from "mjml-react";
import React from "react";
import { withCssClass } from "./withCssClass";

export type EmailImageProps = InferComponentProps<typeof MjmlImage> & {
	className?: string;
};

export const EmailImage = styled<EmailImageProps>(
	withCssClass((props) => <MjmlImage padding={0} {...props} />)
)``;

EmailImage.displayName = "EmailImage";
