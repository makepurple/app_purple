import { AppBar, HamburgerMenuButton, MenuItem, MobileAppBarDrawer } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { useMenuState } from "reakit";

export default {
	title: "atoms/MobileAppBarDrawer",
	component: MobileAppBarDrawer
} as Meta;

const Template: Story = (args) => {
	const menu = useMenuState();

	return (
		<>
			<AppBar>
				<HamburgerMenuButton {...menu} />
			</AppBar>
			<MobileAppBarDrawer {...menu} {...args}>
				<MenuItem {...menu}>Red</MenuItem>
				<MenuItem {...menu}>Blue</MenuItem>
				<MenuItem {...menu} selected>
					Purple
				</MenuItem>
			</MobileAppBarDrawer>
		</>
	);
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters
};
