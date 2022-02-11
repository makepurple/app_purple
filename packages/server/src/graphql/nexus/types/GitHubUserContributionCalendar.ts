import { objectType } from "nexus";

export const GitHubUserContributionCalendar = objectType({
	name: "GitHubUserContributionCalendar",
	definition: (t) => {
		t.nonNull.int("totalContributions");
		t.nonNull.list.nonNull.field("weeks", {
			type: "GitHubUserContributionCalendarWeek"
		});
	}
});
