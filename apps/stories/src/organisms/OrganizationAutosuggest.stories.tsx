import { PromiseUtils } from "@makepurple/utils";
import { OrganizationAutosuggest, OrganizationAutosuggestProps } from "@makepurple/www";
import { SuggestOrganizations_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import { getOperationName } from "@urql/core";
import ms from "ms";
import React, { useState } from "react";

export default {
	title: "organisms/OrganizationAutosuggest",
	component: OrganizationAutosuggest
} as Meta;

const Template: Story<OrganizationAutosuggestProps> = (args) => {
	const [value, setValue] = useState<string>("");

	return (
		<OrganizationAutosuggest
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
			case "SuggestOrganizations":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestOrganizations_mock };
			default:
				return {};
		}
	}
};
