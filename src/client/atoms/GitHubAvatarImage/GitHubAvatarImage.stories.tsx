import { GitHubAvatarImage } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/GitHubAvatarImage",
	component: GitHubAvatarImage
};

const Template = (args) => <GitHubAvatarImage {...args} />;
Template.args = {
	src: "https://avatars.githubusercontent.com/u/810438",
	width: 64,
	height: 64
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
