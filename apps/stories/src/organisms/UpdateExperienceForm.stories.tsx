import { PromiseUtils } from "@makepurple/utils";
import { UpdateExperienceForm, UpdateExperienceFormProps } from "@makepurple/www";
import { SuggestExperiences_mock, UpdateExperience_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React from "react";

export default {
	title: "organisms/UpdateExperienceForm",
	component: UpdateExperienceForm
} as Meta;

const Template: Story<UpdateExperienceFormProps> = (args) => {
	return <UpdateExperienceForm {...args} />;
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
			case "UpdateExperience":
				await PromiseUtils.wait(ms("1s"));

				return { data: UpdateExperience_mock };
			default:
				return {};
		}
	}
};