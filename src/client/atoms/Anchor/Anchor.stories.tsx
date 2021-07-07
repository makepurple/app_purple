import { Anchor } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Anchor",
	component: Anchor
};

const Template = (args) => <Anchor {...args} />;
Template.args = {
	children: "google",
	href: "https://google.com"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
