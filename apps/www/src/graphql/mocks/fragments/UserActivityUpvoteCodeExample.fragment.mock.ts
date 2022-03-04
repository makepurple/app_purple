import { dayjs } from "@makepurple/utils";
import { UserActivityUpvoteCodeExample } from "../../generated";
import { CodeExample_fragment_mock } from "./CodeExample.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const UserActivityUpvoteCodeExample_fragment_mock: UserActivityUpvoteCodeExample = {
	__typename: "UserActivityUpvoteCodeExample",
	codeExample: CodeExample_fragment_mock,
	codeExampleId: CodeExample_fragment_mock.id,
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
