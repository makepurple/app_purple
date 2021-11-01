import { OrderedList, OrderedListItem } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/OrderedList",
	component: OrderedList
} as Meta;

const Template: Story = (args) => {
	return (
		<OrderedList {...args}>
			<OrderedListItem>react</OrderedListItem>
			<OrderedListItem>vue</OrderedListItem>
			<OrderedListItem>angular</OrderedListItem>
		</OrderedList>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
