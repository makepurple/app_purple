import { Tab, TabList } from "@/client/atoms";
import { GitHubIcon } from "@/client/svgs";
import NextLink from "next/link";
import React from "react";
import { useTabState } from "reakit";

export default {
	title: "atoms/TabList",
	component: TabList
};

const Template = (args) => {
	const tabs = useTabState({
		selectedId: "react"
	});

	return (
		<TabList {...tabs} {...args}>
			<NextLink href="https://reactjs.org/" passHref>
				<Tab {...tabs} id="react">
					<GitHubIcon height={20} width={20} />
					<span>react</span>
				</Tab>
			</NextLink>
			<NextLink href="https://vuejs.org/" passHref>
				<Tab {...tabs} as="a">
					vue
				</Tab>
			</NextLink>
			<NextLink href="https://angular.io/" passHref>
				<Tab {...tabs} as="a">
					angular
				</Tab>
			</NextLink>
		</TabList>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
