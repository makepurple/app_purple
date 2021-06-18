import { Breakpoints } from "./breakpoints";

export const MediaQueries = {
	sm: `(min-width: ${Breakpoints.sm}px)`,
	md: `(min-width: ${Breakpoints.md}px)`,
	lg: `(min-width: ${Breakpoints.lg}px)`,
	xl: `(min-width: ${Breakpoints.xl}px)`
} as const;
