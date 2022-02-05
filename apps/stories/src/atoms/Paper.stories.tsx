import { faker } from "@faker-js/faker";
import { Paper } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

faker.seed(1);

export default {
	title: "atoms/Paper",
	component: Paper
} as Meta;

const Template: Story = (args) => {
	return <Paper {...args} />;
};
Template.args = {
	children: faker.lorem.paragraphs(10)
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
