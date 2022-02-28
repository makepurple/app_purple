import { faker } from "@faker-js/faker";
import { dayjs } from "@makepurple/utils";
import { codeBlock } from "common-tags";
import { CodeExample, CodeLanguage } from "../../generated";
import { PageInfo_fragment_mock } from "./PageInfo.fragment.mock";
import { Skill_fragment_mock } from "./Skill.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

faker.seed(1);

const upvoters = Array.from({ length: 3 }, (_, i) => ({
	...User_fragment_mock,
	id: `${i}`
}));

const content = codeBlock`
	import { EffectCallback, FC, ReactNode, useEffect } from "react";

	const data = {
		title: "Grapes of Wrath",
		description: null,
		price: 27.99
	};

	const useEffectOnce = (effect: EffectCallback) => {
		// Use effect with 0 dependencies, so it only executes once
		useEffect(effect, []);
	};

	interface ButtonProps {
		className?: string;
		type?: "button" | "submit";
	}

	const Button: FC<ButtonProps> = ({ children, className, type }) => {
		return (
			<button className={className} type={type}>
				{children}
			</button>
		)
	};

	export default useEffectOnce;
`;

export const CodeExample_fragment_mock: CodeExample = {
	__typename: "CodeExample",
	author: User_fragment_mock,
	authorName: User_fragment_mock.name,
	comments: {
		__typename: "CommentConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
	content,
	createdAt: dayjs(1318781876406).toDate(),
	description: faker.lorem.paragraphs(1),
	id: "0",
	language: CodeLanguage.TypeScript,
	languageColor: "#2b7489",
	primarySkill: Skill_fragment_mock,
	primarySkillId: Skill_fragment_mock.id,
	skills: {
		__typename: "SkillConnection",
		pageInfo: PageInfo_fragment_mock,
		edges: [
			{
				__typename: "SkillEdge",
				cursor: Skill_fragment_mock.id,
				node: Skill_fragment_mock
			}
		],
		nodes: [Skill_fragment_mock],
		totalCount: 1
	},
	title: "useEffectOnce",
	updatedAt: dayjs(1318781876406).toDate(),
	upvotes: upvoters.length,
	upvoters: {
		__typename: "UserConnection",
		pageInfo: PageInfo_fragment_mock,
		edges: upvoters.map((upvoter) => ({
			__typename: "UserEdge",
			cursor: upvoter.id,
			node: upvoter
		})),
		nodes: upvoters,
		totalCount: upvoters.length
	},
	urlSlug: "useeffectonce",
	viewerUpvote: false
};
