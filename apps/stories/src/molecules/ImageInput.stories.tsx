import { Button, ImageInput, ImageInputProps } from "@makepurple/components";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";

export default {
	title: "molecules/ImageInput",
	component: ImageInput
} as Meta;

const Template: Story<ImageInputProps> = (args) => {
	const { control, handleSubmit } = useForm();

	return (
		<form
			onSubmit={handleSubmit((data) => {
				action("onSubmit")(data);
			})}
		>
			<ImageInput {...args} control={control} name="image_file" />
			<Button tw="mt-2" type="submit">
				Submit
			</Button>
		</form>
	);
};
Template.args = {
	name: "storybook/image-input"
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
