import { Button, ListItem, Menu, MenuProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Menu",
	component: Menu
} as Meta;

const Template: Story<MenuProps> = (args) => {
	return (
		<Menu {...args}>
			<Menu.Button as={Button}>More</Menu.Button>
			<Menu.Items>
				<Menu.Item>{(itemProps) => <ListItem {...itemProps}>react</ListItem>}</Menu.Item>
				<Menu.Item>{(itemProps) => <ListItem {...itemProps}>vue</ListItem>}</Menu.Item>
				<Menu.Item>{(itemProps) => <ListItem {...itemProps}>angular</ListItem>}</Menu.Item>
			</Menu.Items>
		</Menu>
	);
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
