import {
	GetPost_mock,
	RemovePostThumbnail_mock,
	UploadPostImage_mock
} from "@/client/graphql/mocks";
import { SiteWideLayout } from "@/client/organisms";
import { PageProps } from "@/client/page-props/[username]/draft";
import Page from "@/pages/[username]/draft";
import { PromiseUtils } from "@/utils";
import type { Meta, Story } from "@storybook/react";
import ms from "ms";
import React from "react";
import { getOperationName } from "urql";

export default {
	title: "pages/[username]/draft",
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
			username: "leedavidcs"
		}
	}
};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
Standard.parameters = {
	...Template.parameters,
	urql: async (op) => {
		switch (getOperationName(op.query)) {
			case "GetPost":
				return { data: GetPost_mock };
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
