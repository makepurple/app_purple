import { objectType } from "nexus";

export const GitHubUserContributionCalendarWeek = objectType({
	name: "GitHubUserContributionCalendarWeek",
	definition: (t) => {
		t.nonNull.list.nonNull.field("contributionDays", {
			type: "GitHubUserContributionCalendarDay"
		});
		t.nonNull.dateTime("firstDay");
	}
});
