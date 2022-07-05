import { dayjs } from "@makepurple/utils";
import { oneLine } from "common-tags";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { UserRole } from "../../graphql";
import { UserActivityCard } from "../UserActivityCard";

const Root = tw.div`
	flex
	flex-col
	items-stretch
	pointer-events-none
	gap-6
`;

const NewPostActivity = tw(UserActivityCard)`
	mr-0
	sm:mr-12
`;

const FollowSkillActivity = tw(UserActivityCard)`
	ml-0
	sm:ml-12
`;

export interface HomePageFeature2FigureProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature2Figure: FC<HomePageFeature2FigureProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<NewPostActivity
				userActivity={{
					__typename: "UserActivityPublishPost",
					id: "0",
					updatedAt: dayjs("2022-05-14T05:41:56.827Z").toDate(),
					user: {
						__typename: "User",
						id: "0",
						image: "https://avatars.githubusercontent.com/u/15151154?u=6eef5b5dddf988bf2b20b7eb9aeb746ac566acc8&v=4",
						name: "leedavidcs"
					},
					userId: "0",
					post: {
						__typename: "Post",
						id: "0",
						author: {
							__typename: "User",
							id: "0",
							name: "leedavidcs",
							role: UserRole.Member
						},
						authorName: "leedavidcs",
						description: oneLine`
							Designing a GraphQL schema that enables better cache updates for urql
							and @apollo/client	
						`,
						publishedAt: dayjs("2022-05-14T05:41:56.827Z").toDate(),
						readTime: 6,
						skills: {
							__typename: "SkillConnection",
							edges: [
								{
									__typename: "SkillEdge",
									cursor: "0",
									node: {
										__typename: "Skill",
										id: "0"
									}
								},
								{
									__typename: "SkillEdge",
									cursor: "1",
									node: {
										__typename: "Skill",
										id: "1"
									}
								},
								{
									__typename: "SkillEdge",
									cursor: "2",
									node: {
										__typename: "Skill",
										id: "2"
									}
								}
							],
							nodes: [
								{
									__typename: "Skill",
									id: "0",
									name: "apollo-client",
									owner: "apollographql"
								},
								{
									__typename: "Skill",
									id: "1",
									name: "graphql-spec",
									owner: "graphql"
								},
								{
									__typename: "Skill",
									id: "2",
									name: "urql",
									owner: "FormidableLabs"
								}
							]
						},
						skillsCount: 1,
						thumbnailUrl: null,
						title: "How Tooling Drives GraphQL API Design - Basics of Data Caching",
						upvotes: 0,
						urlSlug: "how-tooling-drives-graphql-api-design-basics-of-data-caching",
						viewerUpvote: null
					},
					postId: "0"
				}}
			/>
			<FollowSkillActivity
				userActivity={{
					__typename: "UserActivityFollowSkill",
					id: "cl56ci384012905gxngw8l7uf",
					updatedAt: dayjs("2022-07-04T06:12:34.133Z").toDate(),
					user: {
						__typename: "User",
						id: "0",
						image: "https://avatars.githubusercontent.com/u/15151154?u=6eef5b5dddf988bf2b20b7eb9aeb746ac566acc8&v=4",
						name: "leedavidcs"
					},
					userId: "0",
					follow: {
						__typename: "Follow",
						id: "0",
						following: {
							__typename: "Skill",
							viewerFollowing: false,
							id: "0",
							name: "prisma",
							owner: "prisma",
							github: {
								__typename: "GitHubRepository",
								id: "0",
								description: oneLine`
									Next-generation ORM for Node.js & TypeScript | PostgreSQL,
									MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB
								`,
								forkCount: 849,
								issueCount: 6539,
								licenseInfo: {
									__typename: "GitHubLicense",
									id: "0",
									name: "Apache License 2.0",
									nickname: null,
									spdxId: "Apache-2.0",
									url: "http://choosealicense.com/licenses/apache-2.0/"
								},
								name: "prisma",
								owner: {
									__typename: "GitHubOrganization",
									id: "0",
									avatarUrl:
										"https://avatars.githubusercontent.com/u/17219288?v=4",
									login: "prisma"
								},
								primaryLanguage: {
									__typename: "GitHubLanguage",
									color: "#3178c6",
									id: "MDg6TGFuZ3VhZ2UyODc=",
									name: "TypeScript"
								},
								pullRequestCount: 3689,
								pushedAt: dayjs("2022-07-03T15:36:09.000Z").toDate(),
								stargazerCount: 23933,
								url: "https://github.com/prisma/prisma"
							}
						}
					},
					followId: "0"
				}}
			/>
		</Root>
	);
};
