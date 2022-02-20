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
import { GlobalGraphQL, SiteWideLayout, UrqlProvider } from "../organisms";

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
				<></>
			</NextHead>
			<GlobalStyles />
			<ErrorBoundary
				fallback={({ error }) => (
					<NextError statusCode={500} title={error?.message ?? undefined} />
				)}
			>
				{({ error, fallback }) => (
					<SessionProvider session={pageProps.session} refetchInterval={REFETCH_INTERVAL}>
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
