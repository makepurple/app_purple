import { Tags } from "@makepurple/components";
import { PromiseUtils } from "@makepurple/utils";
import { SkillAutosuggest, SkillAutosuggestProps } from "@makepurple/www";
import { RepositorySearchResultGitHubRepositoryFragment } from "@makepurple/www/src/graphql";
import {
	GitHubRepository_fragment_mock,
	SuggestSkills_mock
} from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React, { useState } from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SkillAutosuggest",
	compoent: SkillAutosuggest
} as Meta;

const Template: Story<SkillAutosuggestProps> = (args) => {
	const [items, setItems] = useState<readonly RepositorySearchResultGitHubRepositoryFragment[]>([
		GitHubRepository_fragment_mock as any
	]);

	return (
		<Tags editable tw="relative">
			{items.map((item) => (
				<Tags.Tag key={`${item.owner}/${item.name}`} id={`${item.owner}/${item.name}`}>
					{item.name}
				</Tags.Tag>
			))}
			<SkillAutosuggest
				{...args}
				onSelect={(newItem) => {
					args.onSelect?.(newItem);

					setItems([...items, newItem]);
				}}
			/>
		</Tags>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	urql: async (op: Operation) => {
		switch (getOperationName(op.query)) {
			case "SuggestSkills":
				await PromiseUtils.wait(ms("1s"));

				return { data: SuggestSkills_mock };
			default:
				return {};
		}
	}
};
