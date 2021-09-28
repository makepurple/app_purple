import { LazyMotion, ThemeProvider, UrqlProvider } from "@/client/atoms";
import { SiteWideLayout } from "@/client/organisms";
import { GlobalStyles } from "@/client/styles";
import ms from "ms";
import { NextComponentType } from "next";
import { Provider as NextAuthProvider } from "next-auth/client";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextHead from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";

import "tippy.js/dist/tippy.css";

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
			<NextAuthProvider session={pageProps.session}>
				<UrqlProvider pageProps={pageProps}>
					<ThemeProvider>
						{/* Import styles (inlined) */}
						<GlobalStyles />
						<NextProgress
							startPosition={0.3}
							stopDelayMs={ms("0.2s")}
							options={{ showSpinner: false }}
						/>
						<LazyMotion>
							<SiteWideLayout>
								<Component {...pageProps} />
							</SiteWideLayout>
						</LazyMotion>
						<Toaster position="bottom-center" />
					</ThemeProvider>
				</UrqlProvider>
			</NextAuthProvider>
		</>
	);
};

export default CustomApp;
