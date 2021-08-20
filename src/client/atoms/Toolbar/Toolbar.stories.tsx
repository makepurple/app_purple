import { Toolbar } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Toolbar",
	component: Toolbar
};

const Template = (args) => <Toolbar {...args} />;
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
