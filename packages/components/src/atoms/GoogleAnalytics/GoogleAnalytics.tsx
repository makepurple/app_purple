import Script from "next/script";
import React, { FC } from "react";

export interface GoogleAnalyticsProps {
	measurementId?: Maybe<string>;
}

export const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ measurementId }) => {
	if (!measurementId) return null;

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag("js", new Date());

						gtag("config", "${measurementId}");
					`
				}}
			/>
		</>
	);
};
