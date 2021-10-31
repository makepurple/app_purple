import { Button, Menu, MenuItem } from "@/client/atoms";
import React from "react";
import { MenuButton, useMenuState } from "reakit";

export default {
	title: "atoms/Menu",
	component: Menu
};

const Template = (args) => {
	const menu = useMenuState();

	return (
		<>
			<MenuButton {...menu} as={Button}>
				Open Menu
			</MenuButton>
			<Menu {...menu} {...args}>
				<MenuItem {...menu}>Red</MenuItem>
				<MenuItem {...menu}>Blue</MenuItem>
				<MenuItem {...menu} selected>
					Purple
				</MenuItem>
			</Menu>
		</>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
