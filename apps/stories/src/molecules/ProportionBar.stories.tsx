import { ProportionBar, ProportionBarItem, ProportionBarProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "molecules/ProportionBar",
	component: ProportionBar
} as Meta;

const Template: Story<ProportionBarProps> = (args) => {
	return (
		<ProportionBar {...args}>
			<ProportionBarItem color="#ff0000" value={120}>
				TypeScript
			</ProportionBarItem>
			<ProportionBarItem color="#00ff00" value={40}>
				CSS
			</ProportionBarItem>
			<ProportionBarItem color="#0000ff" value={20}>
				HTML
			</ProportionBarItem>
		</ProportionBar>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
