import { FrostedGlass } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/FrostedGlass",
	component: FrostedGlass
};

const Template = (args) => {
	return (
		<div style={{ position: "relative" }}>
			<FrostedGlass {...args} style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
			<div>The quick brown fox jumps over the lazy dog.</div>
		</div>
	);
};
Template.args = {
	children: "Hello World"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
