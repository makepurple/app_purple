import { ThemeProvider } from "@/client/atoms";
import { Mjml, MjmlBody, MjmlFont, MjmlHead, MjmlPreview, MjmlTitle } from "mjml-react";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { InjectStyles } from "./InjectStyles";
import { withCssClass } from "./withCssClass";

const Body = styled(withCssClass(MjmlBody))`
	font-family: Gilroy, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
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
		<ThemeProvider>
			<Mjml>
				<MjmlHead>
					<MjmlTitle>{title}</MjmlTitle>
					<MjmlPreview>{preview}</MjmlPreview>
					<MjmlFont name="Gilroy" href={`${process.env.BASE_URL}/css/font-gilroy.css`} />
					<InjectStyles />
				</MjmlHead>
				<Body className={className}>{children}</Body>
			</Mjml>
		</ThemeProvider>
	);
};
