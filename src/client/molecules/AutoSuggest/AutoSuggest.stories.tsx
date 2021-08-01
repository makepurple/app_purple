import { AutoSuggest } from "@/client/molecules";
import React from "react";

export default {
	title: "molecules/AutoSuggest",
	component: AutoSuggest
};

const Template = (args) => {
	return <AutoSuggest {...args} />;
};
Template.args = {
	items: ["react", "vue", "angular", "react and react-dom"],
	placeholder: "What is your favorite library?",
	style: { width: 300 }
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
