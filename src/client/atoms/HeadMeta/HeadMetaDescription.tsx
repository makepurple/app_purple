import NextHead from "next/head";
import React, { FC } from "react";

export interface HeadMetaDescriptionProps {
	description: string;
}

export const HeadMetaDescription: FC<HeadMetaDescriptionProps> = ({ description }) => {
	return (
		<NextHead>
			<meta key="description" content={description} name="description" />
			<meta key="og:description" content={description} property="og:description" />
			<meta key="twitter:description" content={description} name="twitter:description" />
		</NextHead>
	);
};
