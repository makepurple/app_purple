import { MainContainer, PageContainer } from "@/client/atoms";
import faker from "faker";
import React from "react";

faker.seed(1);

const paragraphs = faker.lorem.paragraphs(10);

export default {
	title: "atoms/PageContainer",
	component: PageContainer
};

const Template = (args) => {
	return (
		<PageContainer {...args}>
			<MainContainer>{paragraphs}</MainContainer>
		</PageContainer>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
