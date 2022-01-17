import { Avatar, AvatarGroup, AvatarGroupProps } from "@makepurple/components";
import { UrlUtils } from "@makepurple/utils";
import type { Meta, Story } from "@storybook/react";
import NextImage from "next/image";
import React from "react";

const AVATAR_COUNT = 5;

export default {
	title: "atoms/AvatarGroup",
	component: AvatarGroup
} as Meta;

const Template: Story<AvatarGroupProps> = (args) => {
	return (
		<AvatarGroup {...args}>
			{Array.from({ length: AVATAR_COUNT }, (_, i) => (
				<Avatar key={i} border={2}>
					<NextImage
						src="https://avatars.githubusercontent.com/u/810438?v=4"
						height={48}
						width={48}
						loader={({ src, width }) => UrlUtils.appendQuery(src, { s: width })}
					/>
				</Avatar>
			))}
		</AvatarGroup>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
