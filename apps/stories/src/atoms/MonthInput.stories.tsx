import { MonthInput, MonthInputProps } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import type { Meta, Story } from "@storybook/react";
import React, { useState } from "react";

export default {
	title: "atoms/MonthInput",
	component: MonthInput
} as Meta;

const Template: Story<MonthInputProps> = (args) => {
	const [value, setValue] = useState<Date>(dayjs(1318781876406).toDate());

	return (
		<MonthInput
			{...args}
			onChange={(newValue, e) => {
				setValue(newValue);

				args.onChange?.(newValue, e);
			}}
			value={value}
		/>
	);
};
Template.args = {
	disabled: false,
	error: false,
	placeholder: "Type stuff here..."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
