import { CodeBlock, PageContainer } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { codeBlock, oneLine } from "common-tags";
import React, { CSSProperties, FC } from "react";
import tw, { styled, theme } from "twin.macro";
import { PostCard } from "../PostCard";

const post1Skills = ["next.js", "prisma", "nexus", "urql", "TypeScript", "pnpm", "turborepo"].map(
	(skill, i) => ({
		__typename: "Skill" as const,
		id: `Skill_${i}`,
		name: skill,
		owner: "github"
	})
);

const post2Skills = ["graphql-spec", "nexus", "urql", "@apollo/client", "relay"].map(
	(skill, i) => ({
		__typename: "Skill" as const,
		id: `Skill_${i}`,
		name: skill,
		owner: "github"
	})
);

const codeExample = codeBlock`
	import React, { CSSProperties, FC } from "react";
	import tw from "twin.macro";

	const Root = tw.div\`
		p-4
		hover:animate-bounce
	\`;

	export interface GreetingsProps {
		className?: string;
		style?: CSSProperties;
	}

	export const Greetings: FC<GreetingsProps> = ({ className, style }) => {
		return (
			<Root className={className} style={style}>
				Sending warm greetings from us at MakePurple!
			</Root>
		);
	};
`;

const Root = tw.div`
	relative
	flex
	flex-col
	items-center
	w-screen
	max-w-full
	pt-24
	pb-28
	bg-indigo-500/10
	border-t
	border-b
	border-solid
	border-gray-300/80
`;

const GridBackground = tw.div`
	absolute
	inset-0
	background-image[linear-gradient(#6366f1 1.3px, transparent 1.3px), linear-gradient(to right, #6366f1 1.3px, #f8fafc 1.3px)]
	bg-[#f8fafc]
	opacity-10
	background-size[1.5rem 1.5rem]
`;

const RadialBackground = tw.div`
	absolute
	inset-0
	background-image[radial-gradient(ellipse, #6366f100 35%, #fff 75%)]
`;

const Title = tw(PageContainer)`
	flex
	flex-col
	text-3xl
	leading-tight
	font-bold
	md:text-6xl
	md:leading-tight
	z-[1]
`;

const DeveloperProfile = styled.div`
	background: ${oneLine`
		linear-gradient(
			-80deg,
			${theme`colors.pink.600`},
			${theme`colors.violet.600`},
			${theme`colors.blue.500`})
	`};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Info = tw(PageContainer)`
	flex
	flex-col
	items-center
	max-width[32rem]
	text-lg
	text-left
	md:text-xl
	md:text-center
	font-medium
	z-[1]
`;

const UgcItems = tw(PageContainer)`
	relative
	flex
	flex-col
	items-center
	gap-6
	max-w-full
	text-left
`;

const StyledPostCard = tw(PostCard)`
	static
	md:absolute
	md:-translate-y-1/2
	top-1/2
	max-width[42rem]
	z-[1]
	pointer-events-none
`;

const Post1Card = tw(StyledPostCard)`
	left-[-18rem]
	md:rotate-6
	md:skew-y-1
`;

const Post2Card = tw(StyledPostCard)`
	hidden
	right-[-18rem]
	md:flex
	md:-rotate-6
	md:-skew-y-1
`;

const StyledCodeBlock = tw(CodeBlock)`
	w-full
	shadow-lg
	z-[1]
`;

export interface HomePageProfileSectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageProfileSection: FC<HomePageProfileSectionProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<GridBackground />
			<RadialBackground />
			<Title as="h2">
				<div>Build-up your</div>
				<DeveloperProfile>Developer Profile</DeveloperProfile>
			</Title>
			<Info as="h3" tw="mt-4">
				Share your knowledge by publishing posts and code snippets of things you&apos;ve
				learned.
			</Info>
			<UgcItems tw="mt-12">
				<Post1Card
					post={{
						__typename: "Post",
						author: {
							__typename: "User",
							id: "0",
							name: "leedavidcs"
						},
						authorName: "leedavidcs",
						description: oneLine`
							How an over-engineered personal website scope-creeped to become
							what MakePurple is today.
						`,
						id: "0",
						publishedAt: dayjs("04-12-2021").toDate(),
						readTime: 8,
						skills: {
							__typename: "SkillConnection",
							totalCount: post1Skills.length,
							edges: post1Skills.map((skill) => ({
								__typename: "SkillEdge",
								cursor: skill.id,
								node: skill
							})),
							nodes: post1Skills
						},
						thumbnailUrl: "/static/jpegs/demo-post-thumbnail.jpg",
						title: "How MakePurple Works",
						upvotes: 12,
						urlSlug: "posts"
					}}
				/>
				<Post2Card
					post={{
						__typename: "Post",
						author: {
							__typename: "User",
							id: "0",
							name: "leedavidcs"
						},
						authorName: "leedavidcs",
						description: oneLine`
							How the GraphQL clients of your consumers should drive your
							API design.
						`,
						id: "0",
						publishedAt: dayjs("05-06-2021").toDate(),
						readTime: 23,
						skills: {
							__typename: "SkillConnection",
							totalCount: post2Skills.length,
							edges: post2Skills.map((skill) => ({
								__typename: "SkillEdge",
								cursor: skill.id,
								node: skill
							})),
							nodes: post2Skills
						},
						thumbnailUrl: "/static/pngs/demo-post-2-thumbnail.png",
						title: "Consumer-First GraphQL API Design",
						upvotes: 27,
						urlSlug: "posts"
					}}
				/>
				<StyledCodeBlock code={codeExample} language="tsx" title="Greetings.tsx" />
			</UgcItems>
		</Root>
	);
};
