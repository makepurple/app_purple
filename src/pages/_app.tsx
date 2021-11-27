import { ErrorBoundary, LazyMotion, UrqlProvider } from "@/client/atoms";
import { SiteWideLayout } from "@/client/organisms";
import { GlobalStyles } from "@/client/styles";
import ms from "ms";
import type { NextComponentType } from "next";
import { SessionProvider } from "next-auth/react";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextError from "next/error";
import NextHead from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider as ReakitProvider } from "reakit";

const NextProgressBar = dynamic(() => import("@/client/atoms/NextProgressBar"), { ssr: false });

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
							<NextProgressBar />
							<LazyMotion>
								<ReakitProvider>
									<SiteWideLayout>
										{error ? fallback : <Component {...pageProps} />}
									</SiteWideLayout>
								</ReakitProvider>
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
