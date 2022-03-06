import {
	ErrorBoundary,
	GlobalStyles,
	LazyMotion,
	NextProgressBarProps
} from "@makepurple/components";
import ms from "ms";
import type { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextError from "next/error";
import NextHead from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { GdprCookieConsent, GlobalGraphQL, SiteWideLayout, UrqlProvider } from "../organisms";

const NextProgressBar = dynamic<NextProgressBarProps>(
	() => import("@makepurple/components").then((mod) => mod.NextProgressBar),
	{ ssr: false }
);

const REFETCH_INTERVAL = ms("5m") / 1_000;

export const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	return (
		<>
			<NextHead>
				<link
					key="apple-touch-icon"
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link key="icon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link
					key="icon-32"
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					key="icon-12"
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link key="manifest" rel="manifest" href="/site.webmanifest" />
				<link
					key="mask-icon"
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta
					key="msapplication-TileColor"
					name="msapplication-TileColor"
					content="#da532c"
				/>
				<meta key="theme-color" name="theme-color" content="#ffffff" />
			</NextHead>
			<GlobalStyles />
			<ErrorBoundary fallback={() => <NextError statusCode={500} />}>
				{({ error, fallback }) => (
					<SessionProvider session={pageProps.session} refetchInterval={REFETCH_INTERVAL}>
						<GdprCookieConsent>
							<UrqlProvider pageProps={pageProps}>
								<GlobalGraphQL />
								<NextProgressBar />
								<LazyMotion>
									<SiteWideLayout>
										{error ? fallback : <Component {...pageProps} />}
									</SiteWideLayout>
								</LazyMotion>
								<Toaster position="top-center" />
							</UrqlProvider>
						</GdprCookieConsent>
					</SessionProvider>
				)}
			</ErrorBoundary>
		</>
	);
};

export default CustomApp;

/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"></meta>
*/
