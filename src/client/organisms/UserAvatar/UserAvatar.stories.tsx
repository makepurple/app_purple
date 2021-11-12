import { User_fragment_mock } from "@/client/graphql/mocks";
import { UserAvatar, UserAvatarProps } from "@/client/organisms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/UserAvatar",
	component: UserAvatar
} as Meta;

const Template: Story<UserAvatarProps> = (args: any) => {
	return <UserAvatar {...args} />;
};
Template.args = {
	border: 1,
	height: 48,
	width: 48,
	user: User_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
