import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { urqlDecorator } from "@urql/storybook-addon";
import { domMax, LazyMotion } from "framer-motion";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../src/client/atoms";
import { GlobalStyles } from "../src/client/styles";

import "tippy.js/dist/tippy.css";
import "../src/client/styles/global.styles.css";

const alphabeticSort = (a, b) => {
	const isSameKind: boolean = a[1].kind === b[1].kind;

	if (isSameKind) {
		return false;
	}

	const compared: boolean = a[1].id.localeCompare(b[1].id, undefined, { numeric: true });

	return compared;
};

addons.setConfig({
	showRoots: true,
	theme: themes.dark
});

/**
 * !HACK
 * @description next/image doesn't work within Storybook, so we're overwriting it here
 * @author David Lee
 * @date June 11, 2021
 */
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />
});

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	nextRouter: {
		Provider: RouterContext.Provider,	
	},
	options: {
		storySort: alphabeticSort
	}
};

export const decorators = [
	urqlDecorator,
	(Story) => (
		<ThemeProvider>
			<GlobalStyles />
			<LazyMotion features={domMax} strict>
				<Story />
			</LazyMotion>
			<Toaster position="bottom-center" />
		</ThemeProvider>
	)
];
