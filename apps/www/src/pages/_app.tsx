import { ErrorBoundary, LazyMotion } from "@makepurple/components";
import type { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextError from "next/error";
import NextHead from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";

const NextProgressBar = dynamic(
	() => import("@makepurple/components").then((mod) => mod.NextProgressBar),
	{ ssr: false }
);

export const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	return (
		<>
			<NextHead>
				<></>
			</NextHead>
			<ErrorBoundary
				fallback={({ error }) => (
					<NextError statusCode={500} title={error?.message ?? undefined} />
				)}
			>
				{({ error, fallback }) => (
					<LazyMotion>
						<NextProgressBar />
						{error ? fallback : <Component {...pageProps} />}
						<Toaster position="top-center" />
					</LazyMotion>
				)}
			</ErrorBoundary>
		</>
	);
};

export default CustomApp;
