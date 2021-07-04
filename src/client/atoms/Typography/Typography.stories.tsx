import { Typography } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Typography",
	component: Typography
};

const Template = (args) => <Typography {...args} />;
Template.args = {
	children: "The quick brown fox jumps over the lazy log."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
