import { Button } from "@/client/atoms";
import { ImageInput } from "@/client/molecules";
import { action } from "@storybook/addon-actions";
import React from "react";
import { useForm } from "react-hook-form";

export default {
	title: "molecules/ImageInput",
	component: ImageInput
};

const Template = (args) => {
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
