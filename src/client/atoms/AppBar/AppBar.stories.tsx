import { AppBar } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/AppBar",
	component: AppBar
};

const Template = (args) => <AppBar {...args} />;
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
