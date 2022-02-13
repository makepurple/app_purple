import { dayjs } from "@makepurple/utils";
import { objectType } from "nexus";

export const GitHubUserContributionCalendarDay = objectType({
	name: "GitHubUserContributionCalendarDay",
	definition: (t) => {
		t.nonNull.int("contributionCount");
		t.nonNull.field("contributionLevel", {
			type: "GitHubUserContributionLevel"
		});
		t.nonNull.dateTime("date", {
			resolve: (source) => {
				/**
				 * !HACK
				 * @description These dates are formatted like YYYY-MM-DD, which our DateTime type
				 * cannot properly return. So we need to format it to a proper date here.
				 * @author David Lee
				 * @date February 12, 2022
				 */
				const date = (source as any).date;

				return dayjs(date).toDate();
			}
		});
		t.nonNull.int("weekday");
	}
});
