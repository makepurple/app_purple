import { Button, ExpandIcon, ListItem, Select, SelectProps } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React, { useState } from "react";

const MOCK_DATA = [
	{ name: "One", value: 1 },
	{ name: "Two", value: 2 },
	{ name: "Three", value: 3 }
];

export default {
	title: "atoms/Select",
	component: Select
} as Meta;

const Template: Story<SelectProps> = (args) => {
	const [value, setValue] = useState<{ name: string; value: number }>(MOCK_DATA[0]);

	return (
		<Select
			{...args}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			value={value}
		>
			{({ open }) => (
				<>
					<Select.Button as={Button} size="small">
						<span tw="w-48">
							{value.name}: {value.value}
						</span>
						<ExpandIcon open={open} />
					</Select.Button>
					<Select.Options>
						{MOCK_DATA.map((item) => (
							<Select.Option key={item.name} value={item}>
								{(optionProps) => (
									<ListItem {...optionProps} selected={item.name === value.name}>
										{item.name}: {item.value}
									</ListItem>
								)}
							</Select.Option>
						))}
					</Select.Options>
				</>
			)}
		</Select>
	);
};
Template.args = {};

export const Standard: any = Template.bind({});
Standard.args = { ...Template.args };
