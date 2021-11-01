import { Button } from "@/client/atoms";
import { action } from "@storybook/addon-actions";
import React from "react";

export default {
	title: "atoms/Button",
	component: Button
};

const Template = (args) => {
	return <Button {...args} onClick={action("onClick")} />;
};
Template.args = {
	children: "Click me!",
	disabled: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
