import { faker } from "@faker-js/faker";
import { FadedEdge, FadedEdgeProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

faker.seed(1);

const content = faker.lorem.paragraphs(10);

export default {
	title: "atoms/FadedEdge",
	component: FadedEdge
} as Meta;

const Template: Story<FadedEdgeProps> = (args) => {
	return (
		<div tw="relative height[300px] width[300px] border border-solid border-black overflow-hidden">
			<p tw="flex items-center justify-center height[300px] width[300px] overflow-auto">
				{content}
			</p>
			<FadedEdge {...args} />
		</div>
	);
};
Template.args = {
	size: 64,
	side: "bottom"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
