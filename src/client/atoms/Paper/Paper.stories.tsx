import { Paper } from "@/client/atoms";
import faker from "faker";
import React from "react";

faker.seed(1);

export default {
	title: "atoms/Paper",
	component: Paper
};

const Template = (args) => {
	return <Paper {...args} />;
};
Template.args = {
	children: faker.lorem.paragraphs(10)
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
