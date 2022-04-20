import {
	HomePageAdditionalBenefitsSection,
	HomePageAdditionalBenefitsSectionProps
} from "@makepurple/www";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/HomePageAdditionalBenefitsSection",
	component: HomePageAdditionalBenefitsSection
} as Meta;

const Template: Story<HomePageAdditionalBenefitsSectionProps> = (args) => {
	return <HomePageAdditionalBenefitsSection {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
