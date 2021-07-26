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
	items: ["react", "vue", "angular", "react and react-dom"]
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
