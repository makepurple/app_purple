import { Menu } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Menu",
	component: Menu
};

const Template = (args) => {
	return (
		<Menu {...args}>
			<Menu.Item>Red</Menu.Item>
			<Menu.Item>Blue</Menu.Item>
			<Menu.Item selected>Purple</Menu.Item>
		</Menu>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
