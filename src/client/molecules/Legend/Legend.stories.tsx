import { Legend } from "@/client/molecules";
import { LanguageColors } from "@/client/styles";
import React from "react";

export default {
	title: "molecules/Legend",
	component: Legend
};

const Template = (args) => {
	return (
		<Legend {...args} style={{ width: 280 }}>
			<Legend.Item color={LanguageColors.TypeScript} value={120}>
				TypeScript
			</Legend.Item>
			<Legend.Item color={LanguageColors.CSS} value={40}>
				CSS
			</Legend.Item>
			<Legend.Item color={LanguageColors.HTML} value={20}>
				HTML
			</Legend.Item>
		</Legend>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
