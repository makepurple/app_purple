import { Footer } from "@/client/atoms";
import React from "react";

export default {
	title: "atoms/Footer",
	component: Footer
};

const Template = (args) => (
	<>
		<div style={{ height: "100vh" }} />
		<Footer {...args} />
	</>
);
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	layout: "fullscreen"
};
