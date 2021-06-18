import { LightTheme } from "./light.theme";

export * from "./dark.theme";
export * from "./light.theme";

export type Theme = typeof LightTheme;

declare module "styled-components" {
	/* eslint-disable @typescript-eslint/no-empty-interface */
	export interface DefaultTheme extends Theme {}
}
