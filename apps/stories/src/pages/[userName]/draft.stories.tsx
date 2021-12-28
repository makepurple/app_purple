import { PromiseUtils } from "@makepurple/utils";
import { SiteWideLayout } from "@makepurple/www";
import {
	GetPostDraft_mock,
	RemovePostThumbnail_mock,
	UploadPostImage_mock
} from "@makepurple/www/src/graphql/mocks";
import { PageProps } from "@makepurple/www/src/page-props/[userName]/draft";
import Page from "@makepurple/www/src/pages/[userName]/draft";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[userName]/draft",
	component: Page,
	decorators: [
		(Story) => (
			<SiteWideLayout>
				<Story />
			</SiteWideLayout>
		)
	]
} as Meta;

const Template: Story<PageProps> = (args) => {
	return <Page {...args} />;
};
Template.args = {};
Template.parameters = {
	layout: "fullscreen",
	nextRouter: {
		query: {
			userName: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op: any) => {
		switch (getOperationName(op.query)) {
			case "GetPostDraft":
				return { data: GetPostDraft_mock };
			case "RemovePostThumbnail":
				await PromiseUtils.wait(ms("1s"));

				return { data: RemovePostThumbnail_mock };
			case "UploadPostImage":
				await PromiseUtils.wait(ms("1s"));

				return { data: UploadPostImage_mock };
			default:
				return {};
		}
	}
};
