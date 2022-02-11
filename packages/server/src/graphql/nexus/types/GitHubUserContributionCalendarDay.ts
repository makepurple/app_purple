import { objectType } from "nexus";

export const GitHubUserContributionCalendarDay = objectType({
	name: "GitHubUserContributionCalendarDay",
	definition: (t) => {
		t.nonNull.int("contributionCount");
		t.nonNull.field("contributionLevel", {
			type: "GitHubUserContributionLevel"
		});
		t.nonNull.dateTime("date");
		t.nonNull.int("weekday");
	}
});
