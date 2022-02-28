import { CodeLanguageSelect, CodeLanguageSelectProps } from "@makepurple/www";
import { CodeLanguage } from "@makepurple/www/src/graphql";
import type { Meta, Story } from "@storybook/react";
import React, { useState } from "react";

export default {
	title: "organisms/CodeLanguageSelect",
	component: CodeLanguageSelect
} as Meta;

const Template: Story<CodeLanguageSelectProps> = (args) => {
	const [language, setLanguage] = useState<CodeLanguage>(CodeLanguage.TypeScript);

	return (
		<CodeLanguageSelect
			{...args}
			onChange={(newLanguage) => {
				setLanguage(newLanguage);
			}}
			value={language}
		/>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
