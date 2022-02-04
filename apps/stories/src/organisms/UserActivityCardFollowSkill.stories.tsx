import { UserActivityCardFollowSkill, UserActivityCardFollowSkillProps } from "@makepurple/www";
import { UserActivityFollowSkill_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserActivityCardFollowSkill",
	component: UserActivityCardFollowSkill
} as Meta;

const Template: Story<UserActivityCardFollowSkillProps> = (args: any) => {
	return (
		<UserActivityCardFollowSkill {...args}>
			<p>This is some content</p>
		</UserActivityCardFollowSkill>
	);
};
Template.args = {
	userActivity: UserActivityFollowSkill_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
