import { ErrorBoundary, LazyMotion, UrqlProvider } from "@/client/atoms";
import { SiteWideLayout } from "@/client/organisms";
import { GlobalStyles } from "@/client/styles";
import ms from "ms";
import type { NextComponentType } from "next";
import { Provider as NextAuthProvider } from "next-auth/client";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextError from "next/error";
import NextHead from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { theme } from "twin.macro";

const NextProgress = dynamic(() => import("nextjs-progressbar"), { ssr: false });

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
			<ErrorBoundary>
				{({ error }) => (
					<NextAuthProvider session={pageProps.session}>
						<UrqlProvider pageProps={pageProps}>
							<NextProgress
								color={theme`colors.indigo.500`}
								startPosition={0.3}
								stopDelayMs={ms("0.2s")}
								options={{ showSpinner: false }}
							/>
							<LazyMotion>
								<SiteWideLayout>
									{error ? (
										<NextError statusCode={500} title="Something went wrong" />
									) : (
										<Component {...pageProps} />
									)}
								</SiteWideLayout>
							</LazyMotion>
							<Toaster position="top-center" />
						</UrqlProvider>
					</NextAuthProvider>
				)}
			</ErrorBoundary>
		</>
	);
};

export default CustomApp;
