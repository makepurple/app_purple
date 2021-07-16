import { DocumentEditor } from "@/client/molecules";
import React from "react";

export default {
	title: "molecules/DocumentEditor",
	component: DocumentEditor
};

const Template = (args) => {
	return <DocumentEditor {...args} />;
};
Template.args = {
	placeholder: "Hello world..."
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
