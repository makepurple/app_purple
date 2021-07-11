import { GradientHeader } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/GradientHeader",
	component: GradientHeader
};

const Template = (args) => {
	return (
		<div style={{ position: "relative", height: "100vh" }}>
			<GradientHeader {...args} />
		</div>
	);
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen"
};
