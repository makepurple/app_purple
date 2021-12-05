import { Button, ListItem, Menu } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Menu",
	component: Menu
} as Meta;

const Template: Story = (args) => {
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

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
