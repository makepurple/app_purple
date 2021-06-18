import { Button } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Button",
	component: Button
};

const Template = (args) => {
	return <Button {...args} />;
};
Template.args = {
	children: "Click me!"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
