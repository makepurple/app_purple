import { LazyMotion, ThemeProvider } from "@/client/atoms";
import { urqlClient } from "@/client/graphql";
import { GlobalStyles } from "@/client/styles";
import ms from "ms";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextHead from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Provider as UrqlProvider } from "urql";

import "@/client/styles/global.styles.css";
import "tippy.js/dist/tippy.css";

const NextProgress = dynamic(() => import("nextjs-progressbar"));

export const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	return (
		<>
			<NextHead>
				<link
					key="font-gilroy-regular"
					rel="preload"
					href="/fonts/Gilroy/Gilroy-Regular.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="true"
				/>
				<link
					key="font-gilroy-medium"
					rel="preload"
					href="/fonts/Gilroy/Gilroy-Medium.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="true"
				/>
			</NextHead>
			{/* Import styles (inlined) */}
			<UrqlProvider value={urqlClient}>
				<ThemeProvider>
					<GlobalStyles />
					<NextProgress
						startPosition={0.3}
						stopDelayMs={ms("0.2s")}
						options={{ showSpinner: false }}
					/>
					<LazyMotion>
						<Component {...pageProps} />
					</LazyMotion>
					<Toaster position="bottom-center" />
				</ThemeProvider>
			</UrqlProvider>
		</>
	);
};

export default CustomApp;
