import { Avatar, AvatarProps } from "@makepurple/components";
import { UrlUtils } from "@makepurple/utils";
import type { Meta, Story } from "@storybook/react";
import NextImage from "next/image";
import React from "react";

export default {
	title: "atoms/Avatar",
	component: Avatar
} as Meta;

const Template: Story<AvatarProps> = (args) => {
	return (
		<Avatar {...args}>
			<NextImage
				src="https://avatars.githubusercontent.com/u/810438?v=4"
				height={48}
				width={48}
				loader={({ src, width }) => UrlUtils.appendQuery(src, { s: width })}
			/>
		</Avatar>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
