import { NextLinkAs, Tab, TabProps } from "@/client/atoms";
import { GitHubIcon } from "@/client/svgs";
import type { Meta, Story } from "@storybook/react";
import React, { Fragment } from "react";

export default {
	title: "atoms/Tab",
	component: Tab
} as Meta;

const Template: Story<TabProps> = (args) => {
	return (
		<Tab.Group>
			<Tab.List>
				<Tab as={Fragment} {...args}>
					{(tabProps) => (
						<NextLinkAs as={Tab.Button} forwardedAs="a" href="/react" {...tabProps}>
							<GitHubIcon height={20} tw="mr-2" width={20} />
							<span>react</span>
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs as={Tab.Button} forwardedAs="a" href="/angular" {...tabProps}>
							angular
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs as={Tab.Button} forwardedAs="a" href="/vue" {...tabProps}>
							vue
						</NextLinkAs>
					)}
				</Tab>
			</Tab.List>
		</Tab.Group>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
