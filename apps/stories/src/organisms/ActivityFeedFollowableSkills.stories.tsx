import { ActivityFeedFollowableSkills, ActivityFeedFollowableSkillsProps } from "@makepurple/www";
import { GetFollowableSkills_mock } from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/ActivityFeedFollowableSkills",
	component: ActivityFeedFollowableSkills
} as Meta;

const Template: Story<ActivityFeedFollowableSkillsProps> = (args) => {
	return <ActivityFeedFollowableSkills {...args} />;
};
Template.args = {};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetFollowableSkills":
				return { data: GetFollowableSkills_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
