import NextHead from "next/head";
import React, { FC } from "react";

export interface HeadMetaTitleProps {
	title: string;
}

export const HeadMetaTitle: FC<HeadMetaTitleProps> = ({ title }) => {
	return (
		<NextHead>
			<title key="title">{title}</title>
			<meta key="schema:title" content={title} itemProp="name" />
			<meta key="og:title" content={title} property="og:title" />
			<meta key="twitter:title" name="twitter:title" content={title} />
		</NextHead>
	);
};
