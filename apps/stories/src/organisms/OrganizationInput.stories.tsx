import { PromiseUtils } from "@makepurple/utils";
import { OrganizationInput, OrganizationInputProps } from "@makepurple/www";
import { SuggestExperiences_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React, { useState } from "react";

export default {
	title: "organisms/OrganizationInput",
	component: OrganizationInput
} as Meta;

const Template: Story<OrganizationInputProps> = (args) => {
	const [value, setValue] = useState<string>("");

	return (
		<OrganizationInput
			{...args}
			onChange={(newValue) => {
				args.onChange?.(newValue);

				setValue(newValue);
			}}
			value={value}
		/>
	);
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
