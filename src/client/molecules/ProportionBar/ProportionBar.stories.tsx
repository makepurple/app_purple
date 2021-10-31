import { ProportionBar, ProportionBarItem } from "@/client/molecules";
import { LanguageColors } from "@/client/styles";
import React from "react";

export default {
	title: "molecules/ProportionBar",
	component: ProportionBar
};

const Template = (args) => {
	return (
		<ProportionBar {...args}>
			<ProportionBarItem color={LanguageColors.TypeScript} value={120}>
				TypeScript
			</ProportionBarItem>
			<ProportionBarItem color={LanguageColors.CSS} value={40}>
				CSS
			</ProportionBarItem>
			<ProportionBarItem color={LanguageColors.HTML} value={20}>
				HTML
			</ProportionBarItem>
		</ProportionBar>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
