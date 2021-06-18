import { createGlobalStyle } from "styled-components";

/* eslint-disable max-len */
export const GlobalStyles = createGlobalStyle`
blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul {
	margin: 0;
	padding: 0
}

h1,h2,h3,h4,h5,h6 {
	font-size: 100%;
	font-weight: 400
}

*,:after,:before {
	-webkit-box-sizing: border-box;
	box-sizing: border-box
}

ul {
	list-style: none
}

button,input,select,textarea {
	margin: 0
}

img,video {
	height: auto;
	max-width: 100%
}

button,input,select,textarea {
	font: inherit
}

body,html {
	font-size: 16px
}

html {
	height: 100%
}

body,html,iframe {
	width: 100%;
}

body {
	margin: 0;
	font-family: Gilroy,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-rendering: optimizeSpeed;
	height: 100%;
	position: relative;
	min-height: 100vh;
	scroll-behavior: smooth;
	background-color: ${({ theme }) => theme.colors.backgroundColor} !important;
}

code {
	font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace
}
`;
/* eslint-enable max-len */
