import { CodeExampleCard, CodeExampleCardProps } from "@makepurple/www";
import { CodeExample_fragment_mock } from "@makepurple/www/src/graphql/mocks";
import type { Meta, Story } from "@storybook/react";
import React from "react";

export default {
	title: "organisms/CodeExampleCard",
	component: CodeExampleCard
} as Meta;

const Template: Story<CodeExampleCardProps> = (args) => {
	return <CodeExampleCard {...args} />;
};
Template.args = {
	codeExample: CodeExample_fragment_mock as any
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
