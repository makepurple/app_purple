import { InfiniteAutoplayCarousel, InfiniteAutoplayCarouselProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "atoms/InfiniteAutoplayCarousel",
	component: InfiniteAutoplayCarousel
} as Meta;

const Template: Story<InfiniteAutoplayCarouselProps> = (args) => {
	return (
		<InfiniteAutoplayCarousel {...args}>
			<div style={{ height: 200, backgroundColor: "yellow" }} />
			<div style={{ height: 200, backgroundColor: "coral" }} />
			<div style={{ height: 200, backgroundColor: "blue" }} />
			<div style={{ height: 200, backgroundColor: "red" }} />
			<div style={{ height: 200, backgroundColor: "orange" }} />
			<div style={{ height: 200, backgroundColor: "purple" }} />
			<div style={{ height: 200, backgroundColor: "pink" }} />
			<div style={{ height: 200, backgroundColor: "navy" }} />
		</InfiniteAutoplayCarousel>
	);
};
Template.args = {
	itemSize: 250
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
