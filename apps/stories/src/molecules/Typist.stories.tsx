import { faker } from "@faker-js/faker";
import { Typist, TypistProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";

faker.seed(1);

export default {
	title: "molecules/Typist",
	component: Typist
} as Meta;

const Template: Story<TypistProps> = (args) => {
	return (
		<Typist {...args}>
			<Typist.Cursor />
		</Typist>
	);
};
Template.args = {
	deleteSpeed: ms("25ms"),
	repeatDelay: ms("5s"),
	sentences: [faker.lorem.words(3), faker.lorem.words(3), faker.lorem.words(3)]
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
