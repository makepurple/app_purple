import { Brand } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Brand",
	component: Brand
};

const Template = (args) => <Brand {...args} />;
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
