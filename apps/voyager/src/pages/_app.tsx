import { NextComponentType } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import React from "react";

import "../styles.css";

export const CustomApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
	Component,
	pageProps
}) => {
	return <Component {...pageProps} />;
};

export default CustomApp;
