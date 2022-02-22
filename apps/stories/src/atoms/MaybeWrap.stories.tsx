import { MaybeWrap, MaybeWrapProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/MaybeWrap",
	component: MaybeWrap
} as Meta;

const Template: Story<MaybeWrapProps> = (args) => {
	return (
		<MaybeWrap {...args} wrap={({ child }) => <div style={{ color: "red" }}>{child}</div>}>
			<span>Hello world~!</span>
		</MaybeWrap>
	);
};
Template.args = {
	children: "google",
	condition: false
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
