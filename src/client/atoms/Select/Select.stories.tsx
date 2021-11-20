import { Select, SelectProps } from "@/client/atoms";
import type { Meta, Story } from "@storybook/react";
import React from "react";

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
	return (
		<TypedSelect {...args} items={MOCK_DATA}>
			<TypedSelect.Disclosure>Select Thing</TypedSelect.Disclosure>
			<TypedSelect.Options>
				{({ items }) =>
					items.map((item, i) => (
						<TypedSelect.Option key={i} index={i}>
							{item.name}
						</TypedSelect.Option>
					))
				}
			</TypedSelect.Options>
		</TypedSelect>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
