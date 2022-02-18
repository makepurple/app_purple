import { PromiseUtils } from "@makepurple/utils";
import { UpdateExperienceForm, UpdateExperienceFormProps } from "@makepurple/www";
import {
	Experience_fragment_mock,
	SuggestOrganizations_mock,
	UpdateExperience_mock
} from "@makepurple/www/src/graphql/mocks";
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
Template.args = {
	experience: Experience_fragment_mock
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "SuggestOrganizations":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestOrganizations_mock };
			case "UpdateExperience":
				await PromiseUtils.wait(ms("1s"));

				return { data: UpdateExperience_mock };
			default:
				return {};
		}
	}
};
