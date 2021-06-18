import { Colors } from "@/client/styles/colors";
import { common } from "./common.theme";

export const dark = {
	...common,
	colors: {
		backgroundColor: Colors.darkerBlue,
		contrastingBackgroundColor: Colors.brightPurple,
		secondaryBackgroundColor: Colors.darkBlue,
		tertiaryBackgroundColor: Colors.darkBlue,
		foregroundColor: Colors.blue,
		widgetPrimaryColor: Colors.darkBlue,
		widgetSecondaryColor: Colors.darkerBlue,
		primaryText: Colors.white,
		contrastingPrimaryText: Colors.white,
		secondaryText: Colors.mediumPurple,
		borderColor: Colors.darkerPurple,
		secondaryBorderColor: Colors.darkBlue,
		hoverColor: Colors.darkBlue,
		disabledColor: Colors.darkPurple,
		boxShadow: "rgba(33, 35, 74, .8)",
		secondaryBoxShadow: "rgba(255,255,255, 0.05)",
		tertiaryBoxShadow: "rgba(31, 31, 65, 1)",
		buttonBoxShadow: "rgba(0, 0, 0, 0.02)",
		iconColor: Colors.purple,
		secondaryIconColor: Colors.purple
	}
} as const;
