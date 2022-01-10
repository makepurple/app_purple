import { UserFollowCard, UserFollowCardProps } from "@makepurple/www";
import { User_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserFollowCard",
	compoent: UserFollowCard
} as Meta;

const Template: Story<UserFollowCardProps> = (args) => {
	return <UserFollowCard {...args} />;
};
Template.args = {
	user: User_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
