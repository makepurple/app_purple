import { dark } from "./dark.theme";
import { light } from "./light.theme";

export * from "./dark.theme";
export * from "./light.theme";

export type Theme = typeof dark | typeof light;
