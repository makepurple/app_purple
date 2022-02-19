import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
body {
	${tw`
		antialiased
		bg-blueGray-50
	`}
}

* {
	${tw`

		focus-visible:outline-none
		focus-visible:ring-2
		focus-visible:ring-indigo-500
		focus-visible:ring-opacity-80
		placeholder:text-gray-400
		placeholder:truncate
	`}
}

button,
input,
textarea {
	${tw`
		focus:outline-none
		focus:ring
		focus:ring-blue-300
		focus:ring-opacity-80
	`}
}
`;

export const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);
