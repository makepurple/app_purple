import { Tabs } from "@/client/atoms";
import { GitHubIcon } from "@/client/svgs";
import NextLink from "next/link";
import React from "react";

export default {
	title: "atoms/Tabs",
	component: Tabs
};

const Template = (args) => {
	return (
		<Tabs {...args}>
			<NextLink href="https://reactjs.org/" passHref>
				<Tabs.Tab icon={GitHubIcon} selected>
					<span>react</span>
				</Tabs.Tab>
			</NextLink>
			<NextLink href="https://vuejs.org/" passHref>
				<Tabs.Tab>vue</Tabs.Tab>
			</NextLink>
			<NextLink href="https://angular.io/" passHref>
				<Tabs.Tab>angular</Tabs.Tab>
			</NextLink>
		</Tabs>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
