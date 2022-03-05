import { dayjs } from "@makepurple/utils";
import { CodeExample_fragment_mock } from ".";
import { NotificationCodeExampleCommented, NotificationType } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const NotificationCodeExampleCommented_fragment_mock: NotificationCodeExampleCommented = {
	__typename: "NotificationCodeExampleCommented",
	codeExample: CodeExample_fragment_mock,
	codeExampleId: CodeExample_fragment_mock.id,
	id: "0",
	opened: false,
	type: NotificationType.CodeExampleCommented,
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: User_fragment_mock.id
};
