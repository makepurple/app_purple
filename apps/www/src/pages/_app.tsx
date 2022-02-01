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
import { useGlobalGraphQL } from "../hooks";
import { AuthDecoratorProvider, SiteWideLayout, UrqlProvider } from "../organisms";

const NextProgressBar = dynamic<NextProgressBarProps>(
	() => import("@makepurple/components").then((mod) => mod.NextProgressBar),
	{ ssr: false }
);

const REFETCH_INTERVAL = ms("5m") / 1_000;

export const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	useGlobalGraphQL();

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
							<AuthDecoratorProvider>
								<NextProgressBar />
								<LazyMotion>
									<SiteWideLayout>
										{error ? fallback : <Component {...pageProps} />}
									</SiteWideLayout>
								</LazyMotion>
								<Toaster position="top-center" />
							</AuthDecoratorProvider>
						</UrqlProvider>
					</SessionProvider>
				)}
			</ErrorBoundary>
		</>
	);
};

export default CustomApp;
