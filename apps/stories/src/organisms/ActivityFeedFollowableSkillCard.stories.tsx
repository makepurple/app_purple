import { OrderedList } from "@makepurple/components";
import {
	ActivityFeedFollowableSkillCard,
	ActivityFeedFollowableSkillCardProps
} from "@makepurple/www";
import { Skill_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/ActivityFeedFollowableSkillCard",
	component: ActivityFeedFollowableSkillCard
} as Meta;

const Template: Story<ActivityFeedFollowableSkillCardProps> = (args) => {
	return (
		<OrderedList>
			<ActivityFeedFollowableSkillCard {...args} />
		</OrderedList>
	);
};
Template.args = {
	index: 0,
	skill: Skill_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
