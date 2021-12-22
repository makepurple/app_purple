import { Button, ControlGroup, Input, XIcon } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/ControlGroup",
	component: ControlGroup
} as Meta;

const Template: Story = (args) => {
	return (
		<ControlGroup {...args}>
			<Input />
			<Button bounce={false} type="button" tw="h-10 w-10">
				<XIcon height={24} width={24} />
			</Button>
		</ControlGroup>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
