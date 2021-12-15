import { Backdrop, BackdropProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Backdrop",
	component: Backdrop
} as Meta;

const Template: Story<BackdropProps> = (args) => {
	return <Backdrop {...args} />;
};
Template.args = {
	open: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
