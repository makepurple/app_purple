import { PromiseUtils } from "@makepurple/utils";
import { CreateExperienceForm, CreateExperienceFormProps } from "@makepurple/www";
import { SuggestExperiences_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React from "react";

export default {
	title: "organisms/CreateExperienceForm",
	component: CreateExperienceForm
} as Meta;

const Template: Story<CreateExperienceFormProps> = (args) => {
	return <CreateExperienceForm {...args} />;
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "SuggestExperiences":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestExperiences_mock };
			default:
				return {};
		}
	}
};
