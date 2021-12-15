import { Button, Popover, PopoverProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Popover",
	component: Popover
} as Meta;

const Template: Story<PopoverProps> = (args) => {
	return (
		<Popover {...args}>
			<Button type="button">Reference</Button>
		</Popover>
	);
};
Template.args = {
	content: <button>Tab to focus me</button>
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
