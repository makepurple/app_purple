import { PromiseUtils } from "@makepurple/utils";
import { SiteWideSideDrawer, SiteWideSideDrawerProps } from "@makepurple/www";
import {
	GetPostDraft_mock,
	GetSiteWideSideDrawer_mock,
	PageInfo_fragment_mock
} from "@makepurple/www/src/graphql/mocks";
import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { getOperationName, Operation } from "urql";

export default {
	title: "organisms/SiteWideSideDrawer",
	component: SiteWideSideDrawer
} as Meta;

const Template: Story<SiteWideSideDrawerProps> = (args) => {
	return <SiteWideSideDrawer {...args} />;
};
Template.args = {
	open: true
};
Template.parameters = {
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return { data: GetSiteWideSideDrawer_mock };
			default:
				return {};
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = { ...Template.parameters };
Standard.decorators = [
	(Base) => (
		<SessionProvider session={null}>
			<Base />
		</SessionProvider>
	)
];

export const Authenticated = Template.bind({});
Authenticated.args = { ...Template.args };
Authenticated.parameters = { ...Template.parameters };

export const NoResults = Template.bind({});
NoResults.args = { ...Template.args };
NoResults.parameters = {
	...Template.parameters,
	urql: (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				return {
					data: {
						...GetSiteWideSideDrawer_mock,
						viewer: {
							...GetSiteWideSideDrawer_mock.viewer,
							following: {
								__typename: "FollowConnection",
								pageInfo: PageInfo_fragment_mock,
								totalCount: 0,
								edges: [],
								nodes: []
							}
						}
					}
				};
			default:
				return {};
		}
	}
};

export const Loading = Template.bind({});
Loading.args = { ...Template.args };
Loading.parameters = {
	...Template.parameters,
	urql: async (op: Operation) => {
		const operationName = getOperationName(op.query);

		operationName && action(operationName)(op.variables);

		switch (operationName) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "GetSiteWideSideDrawer":
				await PromiseUtils.wait(ms("5s"));

				return { data: GetSiteWideSideDrawer_mock };
			default:
				return {};
		}
	}
};
