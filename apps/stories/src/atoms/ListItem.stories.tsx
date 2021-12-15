import { ListItem, ListItemProps, Paper } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/ListItem",
	component: ListItem
} as Meta;

const Template: Story<ListItemProps> = (args) => {
	return (
		<Paper as="ul">
			<ListItem {...args}>Item A</ListItem>
			<ListItem>Item B</ListItem>
		</Paper>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
