import { Colors } from "@/client/styles/colors";
import { common } from "./common.theme";

export const LightTheme = {
	...common,
	colors: {
		backgroundColor: Colors.mutedWhite,
		surfaceColor: Colors.white,
		contrastingBackgroundColor: Colors.black,
		secondaryBackgroundColor: Colors.lightPurple,
		tertiaryBackgroundColor: Colors.lightBlue,
		foregroundColor: Colors.mutedBlue,
		widgetPrimaryColor: Colors.white,
		widgetSecondaryColor: Colors.lightPurple,
		primaryText: Colors.black,
		contrastingPrimaryText: Colors.white,
		secondaryText: Colors.grey,
		borderColor: Colors.mutedPurple,
		secondaryBorderColor: Colors.mutedPurple,
		hoverColor: Colors.lightPurple,
		disabledColor: Colors.mediumPurple,
		boxShadow: "rgba(33, 35, 74, 0.17)",
		secondaryBoxShadow: "rgba(0, 0, 0, 0.05)",
		tertiaryBoxShadow: "rgba(31, 31, 65, 0.05)",
		buttonBoxShadow: "rgba(255, 255, 255, 0.25)",
		iconColor: Colors.mediumBlue,
		outlineColor: "rgb(232, 236, 253)",
		secondaryIconColor: Colors.darkBlue
	}
} as const;
