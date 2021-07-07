import { Avatar } from "@/client/atoms";
import NextImage from "next/image";
import React from "react";

export default {
	title: "atoms/Avatar",
	component: Avatar
};

const Template = (args) => {
	return (
		<Avatar {...args}>
			<NextImage
				src="https://avatars.githubusercontent.com/u/810438?v=4"
				height={64}
				width={64}
			/>
		</Avatar>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
