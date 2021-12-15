import { Brand, BrandProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/Brand",
	component: Brand
} as Meta;

const Template: Story<BrandProps> = (args) => <Brand {...args} />;
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
