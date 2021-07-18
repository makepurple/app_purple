import { ProportionBar } from "@/client/molecules";
import { LanguageColors } from "@/client/styles";
import React from "react";

export default {
	title: "molecules/ProportionBar",
	component: ProportionBar
};

const Template = (args) => {
	return (
		<ProportionBar {...args}>
			<ProportionBar.Item color={LanguageColors.TypeScript} value={120}>
				TypeScript
			</ProportionBar.Item>
			<ProportionBar.Item color={LanguageColors.CSS} value={40}>
				CSS
			</ProportionBar.Item>
			<ProportionBar.Item color={LanguageColors.HTML} value={20}>
				HTML
			</ProportionBar.Item>
		</ProportionBar>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
