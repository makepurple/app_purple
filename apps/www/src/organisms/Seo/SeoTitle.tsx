import NextHead from "next/head";
import React, { FC } from "react";
import { useGetNotificationCountsQuery } from "../../graphql";

export interface SeoTitleProps {
	title: string;
}

export const SeoTitle: FC<SeoTitleProps> = ({ title }) => {
	const [{ data }] = useGetNotificationCountsQuery({
		requestPolicy: "cache-first"
	});

	const notificationCount = data?.viewer?.newNotificationsCount;

	return (
		<NextHead>
			<title key="title">
				{notificationCount ? `(${notificationCount}) ${title}` : title}
			</title>
			<meta key="schema:title" content={title} itemProp="name" />
			<meta key="og:title" content={title} property="og:title" />
			<meta key="twitter:title" name="twitter:title" content={title} />
		</NextHead>
	);
};
