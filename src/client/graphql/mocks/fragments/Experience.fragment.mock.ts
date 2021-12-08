import { Experience, ExperienceType } from "@/client/graphql/generated";
import dayjs from "dayjs";
import faker from "faker";
import { Organization_fragment_mock } from "./Organization.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

faker.seed(1);

export const Experience_fragment_mock: Experience = {
	__typename: "Experience",
	endDate: null,
	highlights: ["Did a thing, then did another thing that was really incredible"],
	id: 0,
	location: "San Francisco, CA",
	organization: Organization_fragment_mock,
	organizationName: Organization_fragment_mock.name,
	positionName: "Senior Frontend Engineer",
	startDate: dayjs(1318781876406).toDate(),
	type: ExperienceType.FullTime,
	user: User_fragment_mock
};
