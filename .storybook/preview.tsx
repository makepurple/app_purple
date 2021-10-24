import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { urqlDecorator } from "@urql/storybook-addon";
import { domMax, LazyMotion } from "framer-motion";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";
import { Toaster } from "react-hot-toast";
import { GlobalStyles } from "../src/client/styles/global.styles";
import "twin.macro"

import "tippy.js/dist/tippy.css";

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

const DEFAULT_VIEWPORT_HEIGHT = "1200px";

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
	},
	viewport: {
		viewports: {
			"2xs": {
				name: "2xs",
				styles: {
					width: "360px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			},
			xs: {
				name: "xs",
				styles: {
					width: "475px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			},
			sm: {
				name: "sm",
				styles: {
					width: "640px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			},
			md: {
				name: "md",
				styles: {
					width: "768px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			},
			lg: {
				name: "lg",
				styles: {
					width: "1024px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			},
			xl: {
				name: "xl",
				styles: {
					width: "1280px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			},
			"2xl": {
				name: "2xl",
				styles: {
					width: "1536px",
					height: DEFAULT_VIEWPORT_HEIGHT
				}
			}
		}
	}
};

export const decorators = [
	urqlDecorator,
	(Story) => (
		<>
			<GlobalStyles />
			<LazyMotion features={domMax} strict>
				<Story />
			</LazyMotion>
			<Toaster position="top-center" />
		</>
	)
];
