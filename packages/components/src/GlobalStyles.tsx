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
		focus-visible:ring-violet-500
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

input[type="search"]::-webkit-search-cancel-button {
	${tw`
		appearance-none
		relative
		h-5
		w-5
		ml-2.5
		mr-0
		border
		border-solid
		border-gray-300
		rounded-sm
		overflow-hidden
		text-black
		bg-gray-100
		bg-auto
		bg-no-repeat
		bg-center
		background-image[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2216%22%20height%3D%2216%22%3E%0A%09%3Cpath%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%20fill-rule%3D%22evenodd%22%20d%3D%22M5.72%205.72a.75.75%200%20011.06%200L12%2010.94l5.22-5.22a.75.75%200%20111.06%201.06L13.06%2012l5.22%205.22a.75.75%200%2011-1.06%201.06L12%2013.06l-5.22%205.22a.75.75%200%2001-1.06-1.06L10.94%2012%205.72%206.78a.75.75%200%20010-1.06z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E")]
		cursor-pointer
		hover:border-transparent
		hover:bg-brand
		hover:background-image[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2216%22%20height%3D%2216%22%3E%0A%09%3Cpath%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22%20fill-rule%3D%22evenodd%22%20d%3D%22M5.72%205.72a.75.75%200%20011.06%200L12%2010.94l5.22-5.22a.75.75%200%20111.06%201.06L13.06%2012l5.22%205.22a.75.75%200%2011-1.06%201.06L12%2013.06l-5.22%205.22a.75.75%200%2001-1.06-1.06L10.94%2012%205.72%206.78a.75.75%200%20010-1.06z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E")]
	`}
}

input[type="search"] {
	&:placeholder-shown,
	&:not(:focus) {
		&::-webkit-search-cancel-button {
			${tw`
				hidden
			`}
		}
	}
}
`;

export const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);
