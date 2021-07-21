import { Input } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Input",
	component: Input
};

const Template = (args) => {
	return <Input {...args} />;
};
Template.args = {
	placeholder: "Type stuff here..."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
