import { MainContainer } from "@/client/atoms";
import faker from "faker";
import React from "react";

faker.seed(1);

const paragraphs = faker.lorem.paragraphs(10);

export default {
	title: "atoms/MainContainer",
	component: MainContainer
};

const Template = (args) => {
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
