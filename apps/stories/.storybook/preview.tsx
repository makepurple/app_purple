import { GlobalStyles, Toaster } from "@makepurple/components";
import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import { urqlDecorator } from "@urql/storybook-addon";
import { domMax, LazyMotion } from "framer-motion";
import React from "react";
import "tippy.js/dist/tippy.css";
import "twin.macro";

const alphabeticSort = (a, b) => {
	const isSameKind: boolean = a[1].kind === b[1].kind;

	if (isSameKind) return false;

	const compared: boolean = a[1].id.localeCompare(b[1].id, undefined, { numeric: true });

	return compared;
};

addons.setConfig({
	showRoots: true,
	theme: themes.dark
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
	options: {
		storySort: alphabeticSort
	},
	viewport: {
		viewports: {
			"2xs": {
				name: "2xs",
				styles: {
					width: "360px",
					height: "640px"
				}
			},
			xs: {
				name: "xs",
				styles: {
					width: "475px",
					height: "800px"
				}
			},
			sm: {
				name: "sm",
				styles: {
					width: "640px",
					height: "960px"
				}
			},
			md: {
				name: "md",
				styles: {
					width: "768px",
					height: "1024px"
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
