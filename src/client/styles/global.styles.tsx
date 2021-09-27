import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
body {
	${tw`antialiased`}
}

code {
	font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace
}
`;

export const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);
