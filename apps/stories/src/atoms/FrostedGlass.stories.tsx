import { FrostedGlass, FrostedGlassProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/FrostedGlass",
	component: FrostedGlass
} as Meta;

const Template: Story<FrostedGlassProps> = (args) => {
	return (
		<div style={{ position: "relative" }}>
			<FrostedGlass {...args} style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
			<div>The quick brown fox jumps over the lazy dog.</div>
		</div>
	);
};
Template.args = {
	children: "Hello World"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
