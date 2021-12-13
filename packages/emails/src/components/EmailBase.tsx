import { styled } from "goober";
import { Mjml, MjmlBody, MjmlFont, MjmlHead, MjmlPreview, MjmlTitle } from "mjml-react";
import React, { FC, ReactNode } from "react";
import { InjectStyles } from "./InjectStyles";
import { withCssClass } from "./withCssClass";

const Body = styled(withCssClass(MjmlBody))`
	font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
		Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	background-color: #f6f9fc;
	padding: 20px 36px 64px;
`;

export interface EmailBaseProps {
	children?: ReactNode;
	className?: string;
	preview: string;
	title: string;
}

export const EmailBase: FC<EmailBaseProps> = ({ children, className, preview, title }) => {
	return (
		<Mjml>
			<MjmlHead>
				<MjmlTitle>{title}</MjmlTitle>
				<MjmlPreview>{preview}</MjmlPreview>
				<MjmlFont
					name="Inter"
					href={"https://fonts.googleapis.com/css2?family=Inter&display=optional"}
				/>
				<InjectStyles />
			</MjmlHead>
			<Body className={className}>{children}</Body>
		</Mjml>
	);
};
