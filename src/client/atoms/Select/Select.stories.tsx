import { Button, ExpandIcon, ListItem, Select, SelectProps } from "@/client/atoms";
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

const TypedSelect = Select.ofType<{ name: string; value: number }>();

const Template: Story<SelectProps<{ name: string; value: number }>> = (args) => {
	const [value, setValue] = useState<{ name: string; value: number }>(MOCK_DATA[0]);

	return (
		<TypedSelect
			{...args}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			value={value}
		>
			{({ open }) => (
				<>
					<TypedSelect.Button as={Button} size="small">
						<span tw="w-48">
							{value.name}: {value.value}
						</span>
						<ExpandIcon open={open} />
					</TypedSelect.Button>
					<TypedSelect.Options>
						{MOCK_DATA.map((item) => (
							<TypedSelect.Option key={item.name} value={item}>
								{(optionProps) => (
									<ListItem {...optionProps} selected={item.name === value.name}>
										{item.name}: {item.value}
									</ListItem>
								)}
							</TypedSelect.Option>
						))}
					</TypedSelect.Options>
				</>
			)}
		</TypedSelect>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
