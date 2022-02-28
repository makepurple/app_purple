import { CodeBlockInput, CodeBlockInputProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import { codeBlock } from "common-tags";
import React, { useState } from "react";

export default {
	title: "molecules/CodeBlockInput",
	component: CodeBlockInput
} as Meta;

const code = codeBlock`
import React, { FC } from "react";

export interface ButtonProps {
	className?: string;
	style?: React.CSSProperties;
}

export const Button: FC<ButtonProps> = (props) => <button {...props} />;
`;

const Template: Story<CodeBlockInputProps> = (args) => {
	const [value, setValue] = useState<string>(code);

	return (
		<CodeBlockInput
			{...args}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			value={value}
		/>
	);
};
Template.args = {
	language: "tsx",
	title: "TypeScript"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
