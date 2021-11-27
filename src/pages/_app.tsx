import { ErrorBoundary, LazyMotion, UrqlProvider } from "@/client/atoms";
import { SiteWideLayout } from "@/client/organisms";
import { GlobalStyles } from "@/client/styles";
import { oneLine } from "common-tags";
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
import { theme } from "twin.macro";

const NextProgress = dynamic(() => import("nextjs-progressbar"), { ssr: false });

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
							<NextProgress
								color={oneLine`
									linear-gradient(
										-80deg,
										${theme`colors.pink.600`},
										${theme`colors.violet.600`},
										${theme`colors.blue.500`})
								`}
								height={6}
								startPosition={0.3}
								stopDelayMs={ms("0.2s")}
								options={{ showSpinner: false }}
							/>
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
