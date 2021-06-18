import { LightTheme } from "@/client/styles";
import React, { FC, ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";

export interface ThemeProviderProps {
	children?: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	return <Provider theme={LightTheme}>{children}</Provider>;
};
