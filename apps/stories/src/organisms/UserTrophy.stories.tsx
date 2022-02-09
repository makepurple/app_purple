import { UserTrophy, UserTrophyProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserTrophy",
	component: UserTrophy
} as Meta;

const Template: Story<UserTrophyProps> = (args) => {
	return <UserTrophy {...args} />;
};
Template.args = {
	type: "followers",
	value: 50
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
