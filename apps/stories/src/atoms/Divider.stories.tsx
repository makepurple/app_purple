import { faker } from "@faker-js/faker";
import { Divider } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

faker.seed(1);

export default {
	title: "atoms/Divider",
	component: Divider
} as Meta;

const Template: Story = (args) => {
	return (
		<div>
			<p>{faker.lorem.paragraphs(2)}</p>
			<Divider {...args} />
			<p>{faker.lorem.paragraphs(2)}</p>
		</div>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
