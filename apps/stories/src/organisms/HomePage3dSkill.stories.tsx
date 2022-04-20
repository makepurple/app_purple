import { HomePage3dSkill, HomePage3dSkillProps } from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePage3dSkill",
	component: HomePage3dSkill
} as Meta;

const Template: Story<HomePage3dSkillProps> = (args) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "50vh",
				width: "50vw"
			}}
		>
			<HomePage3dSkill {...args} />
		</div>
	);
};
Template.args = {
	children: "TailwindCSS",
	width: 128
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
