import { faker } from "@faker-js/faker";
import { MainContainer, PageContainer } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

faker.seed(1);

const paragraphs = faker.lorem.paragraphs(10);

export default {
	title: "atoms/PageContainer",
	component: PageContainer
} as Meta;

const Template: Story = (args) => {
	return (
		<PageContainer {...args}>
			<MainContainer>{paragraphs}</MainContainer>
		</PageContainer>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
