import { Tags } from "@/client/molecules";
import React from "react";

export default {
	title: "molecules/Tags",
	component: Tags
};

const Template = (args) => {
	return (
		<Tags {...args} style={{ width: 280 }}>
			<Tags.Tag>Next.js</Tags.Tag>
			<Tags.Tag>Prisma</Tags.Tag>
			<Tags.Tag>Nexus</Tags.Tag>
			<Tags.Tag>Urql</Tags.Tag>
			<Tags.Tag>TypeScript</Tags.Tag>
			<Tags.Tag>Storybook</Tags.Tag>
			<Tags.Tag>Figma</Tags.Tag>
			<Tags.Tag>Framer-Motion</Tags.Tag>
		</Tags>
	);
};
Template.args = {
	editable: false,
	type: "neutral"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
