import { Button, Popover } from "@/client/atoms";
import faker from "faker";
import React from "react";

faker.seed(1);

const paragraphs = faker.lorem.paragraphs(10);

export default {
	title: "atoms/Popover",
	component: Popover
};

const Template = (args) => {
	return (
		<Popover {...args} content={paragraphs}>
			<Button type="button">Click me!</Button>
		</Popover>
	);
};
Template.args = {
	arrow: true
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
