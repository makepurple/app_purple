import { faker } from "@faker-js/faker";
import { MainContainer, MainContainerProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

faker.seed(1);

const paragraphs = faker.lorem.paragraphs(10);

export default {
	title: "atoms/MainContainer",
	component: MainContainer
} as Meta;

const Template: Story<MainContainerProps> = (args) => {
	return (
		<div
			style={{
				display: "flex",
				padding: "0 48px"
			}}
		>
			<MainContainer {...args}>{paragraphs}</MainContainer>
		</div>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
