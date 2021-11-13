import { Tags } from "@/client/molecules";
import React from "react";

export default {
	title: "molecules/Tags",
	component: Tags
};

const Template = (args) => {
	return (
		<Tags {...args} style={{ width: 280 }}>
			<Tags.Tag id="vercel/next">Next.js</Tags.Tag>
			<Tags.Tag id="prisma/prisma">Prisma</Tags.Tag>
			<Tags.Tag id="graphql-nexus/nexus">Nexus</Tags.Tag>
			<Tags.Tag id="formidablelabs/urql">Urql</Tags.Tag>
			<Tags.Tag id="microsoft/typescript">TypeScript</Tags.Tag>
			<Tags.Tag id="storybook/storybook">Storybook</Tags.Tag>
			<Tags.Tag id="figma/figma">Figma</Tags.Tag>
			<Tags.Tag id="framer/motion">Framer-Motion</Tags.Tag>
			<Tags.Editable />
		</Tags>
	);
};
Template.args = {
	editable: false,
	type: "neutral"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
