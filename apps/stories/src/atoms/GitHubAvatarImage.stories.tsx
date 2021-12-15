import { GitHubAvatarImage, GitHubAvatarImageProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/GitHubAvatarImage",
	component: GitHubAvatarImage
} as Meta;

const Template: Story<GitHubAvatarImageProps> = (args) => {
	return <GitHubAvatarImage {...args} />;
};
Template.args = {
	src: "https://avatars.githubusercontent.com/u/810438",
	width: 64,
	height: 64
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
