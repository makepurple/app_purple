import { dayjs } from "@makepurple/utils";
import { UserActivityCommentCodeExample } from "../../generated";
import { CodeExample_fragment_mock } from "./CodeExample.fragment.mock";
import { Comment_fragment_mock } from "./Comment.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const UserActivityCommentCodeExample_fragment_mock: UserActivityCommentCodeExample = {
	__typename: "UserActivityCommentCodeExample",
	comment: {
		...Comment_fragment_mock,
		codeExample: CodeExample_fragment_mock,
		codeExampleId: CodeExample_fragment_mock.id
	},
	commentId: Comment_fragment_mock.id,
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
