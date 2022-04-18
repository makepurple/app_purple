import { faker } from "@faker-js/faker";
import { InfiniteAutoplayCarousel, InfiniteAutoplayCarouselProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React from "react";

faker.seed(1);

export default {
	title: "atoms/InfiniteAutoplayCarousel",
	component: InfiniteAutoplayCarousel
} as Meta;

const Template: Story<InfiniteAutoplayCarouselProps> = (args) => {
	return (
		<InfiniteAutoplayCarousel {...args}>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "yellow"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "coral"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "blue"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "red"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "orange"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "purple"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "pink"
				}}
			/>
			<div
				style={{
					height: 128,
					width: faker.datatype.number({ min: 150, max: 300 }),
					backgroundColor: "navy"
				}}
			/>
		</InfiniteAutoplayCarousel>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
