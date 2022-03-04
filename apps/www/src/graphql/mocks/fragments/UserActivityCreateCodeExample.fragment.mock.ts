import { dayjs } from "@makepurple/utils";
import { CodeExample_fragment_mock } from ".";
import { UserActivityCreateCodeExample } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const UserActivityCreateCodeExample_fragment_mock: UserActivityCreateCodeExample = {
	__typename: "UserActivityCreateCodeExample",
	codeExample: CodeExample_fragment_mock,
	codeExampleId: CodeExample_fragment_mock.id,
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
