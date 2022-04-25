import { ShareButton, ShareButtonProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "molecules/ShareButton",
	component: ShareButton
} as Meta;

const Template: Story<ShareButtonProps> = (args) => {
	return (
		<ShareButton {...args}>
			<span>Share</span>
		</ShareButton>
	);
};
Template.args = {
	share: {
		text: "Sharing a story!",
		url: "https://google.com",
		title: "Story of Share Button"
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
