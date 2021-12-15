import { Legend, LegendProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "molecules/Legend",
	component: Legend
} as Meta;

const Template: Story<LegendProps> = (args) => {
	return (
		<Legend {...args} style={{ width: 280 }}>
			<Legend.Item color="#ff0000" value={120}>
				TypeScript
			</Legend.Item>
			<Legend.Item color="#00ff00" value={40}>
				CSS
			</Legend.Item>
			<Legend.Item color="#0000ff" value={20}>
				HTML
			</Legend.Item>
		</Legend>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
