import { AppBar, HamburgerMenuButton, MobileAppBarDrawer } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import faker from "faker";
import React from "react";
import { useMenuState } from "reakit";

faker.seed(1);

const paragraphs = faker.lorem.paragraphs(10);

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
				{paragraphs}
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
