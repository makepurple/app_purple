import { HomePageSkillsSection, HomePageSkillsSectionProps } from "@makepurple/www";
import { GetHomePageSkills_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/HomePageSkillsSection",
	component: HomePageSkillsSection
} as Meta;

const Template: Story<HomePageSkillsSectionProps> = (args) => {
	return <HomePageSkillsSection {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetHomePageSkills":
				return { data: GetHomePageSkills_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
