import { ProgressBar } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/ProgressBar",
	component: ProgressBar
};

const Template = (args) => {
	return <ProgressBar {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
