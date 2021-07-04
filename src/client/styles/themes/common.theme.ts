import { Breakpoints } from "@/client/styles/breakpoints";
import { Colors } from "@/client/styles/colors";
import { FontWeights } from "@/client/styles/font-weights";
import { Gradients } from "@/client/styles/gradients";
import { MediaQueries } from "@/client/styles/media-queries";
import { Shadows } from "@/client/styles/shadows";
import { getZIndex } from "@/client/styles/z-indicies";

export const common = {
	breakpoints: Breakpoints,
	fontWeights: FontWeights,
	gradients: Gradients,
	mediaQueries: MediaQueries,
	palette: Colors,
	shadows: Shadows,
	zIndicies: { getZIndex }
} as const;
