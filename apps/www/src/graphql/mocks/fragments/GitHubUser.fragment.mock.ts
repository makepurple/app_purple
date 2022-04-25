import { dayjs } from "@makepurple/utils";
import { GitHubUser, GitHubUserContributionLevel } from "../../generated";
import { TopLanguages_fragment_mock } from "./TopLanguages.fragment.mock";

export const GitHubUser_fragment_mock: GitHubUser = {
	__typename: "GitHubUser",
	id: "0",
	avatarUrl: "https://avatars.githubusercontent.com/u/15151154?v=4",
	bio: "I learn things and work on MakePurple",
	company: "Openbase",
	contributionCalendar: {
		__typename: "GitHubUserContributionCalendar",
		totalContributions: 3122,
		weeks: [
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 33,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-02-07T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-08T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-09T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-10T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-11T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-12T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 25,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-02-13T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-02-07").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-14T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-02-15T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-16T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-17T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-18T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-19T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-20T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-02-14").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-21T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-22T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-02-23T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 17,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-24T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-25T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-26T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-02-27T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-02-21").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-02-28T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-01T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-02T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-03T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-04T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-05T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-06T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-02-28").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-07T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-08T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-09T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-03-10T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-11T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 24,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-03-12T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-13T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-03-07").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-14T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-15T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-16T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-17T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-18T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-19T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-20T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-03-14").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-21T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-22T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-23T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-24T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-25T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-03-26T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-27T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-03-21").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-28T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-29T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-30T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-03-31T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-01T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-02T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-03T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-03-28").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-04T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-05T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-06T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-07T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-08T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-09T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-10T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-04-04").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-11T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-04-12T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-13T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-14T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-15T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-16T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-17T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-04-11").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-18T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 24,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-04-19T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-20T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-21T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-22T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 25,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-04-23T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-24T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-04-18").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-25T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-26T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-27T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-04-28T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-29T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-04-30T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-01T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-04-25").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-02T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-03T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-04T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-05T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-06T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-07T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-05-08T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-05-02").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-09T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 26,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-05-10T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-05-11T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-12T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 24,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-05-13T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-14T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-15T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-05-09").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-16T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-05-17T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 40,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-05-18T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 32,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-05-19T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 28,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-05-20T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-21T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-22T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-05-16").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-23T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 18,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-05-24T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-05-25T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-26T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-27T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-28T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-05-29T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-05-23").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-30T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-05-31T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-01T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-02T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-03T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-04T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-05T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-05-30").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-06T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-07T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-08T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-09T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-10T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-11T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-12T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-06-06").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-13T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-14T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-06-15T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-06-16T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-06-17T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-18T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-19T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-06-13").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-20T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-06-21T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-22T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-23T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-24T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-25T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-26T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-06-20").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-06-27T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-06-28T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-29T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-06-30T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-01T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-07-02T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-03T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-06-27").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-04T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-07-05T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-06T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-07T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-08T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-09T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-10T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-07-04").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-11T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-12T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-13T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-14T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-15T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-16T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-17T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-07-11").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-18T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-19T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-20T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-21T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-07-22T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-23T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-24T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-07-18").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-25T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-26T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-27T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-07-28T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-29T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-30T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-07-31T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-07-25").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-01T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-02T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-03T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-04T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-05T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-06T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-07T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-08-01").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-08T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-09T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-10T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 28,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-08-11T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-12T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-13T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-14T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-08-08").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-15T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-16T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 21,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-17T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 27,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-08-18T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-19T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-20T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-21T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-08-15").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-22T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-23T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-08-24T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-25T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-26T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-27T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-28T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-08-22").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-08-29T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-30T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-08-31T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-01T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-02T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-03T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-04T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-08-29").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-05T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-06T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 32,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-09-07T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-08T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-09T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-10T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-11T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-09-05").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-12T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-13T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 23,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-09-14T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-15T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-16T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 23,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-09-17T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-18T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-09-12").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-19T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 29,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-09-20T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-21T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 29,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-09-22T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-23T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-24T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-25T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-09-19").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-09-26T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 24,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-09-27T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 27,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-09-28T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 18,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-09-29T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-09-30T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-01T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-02T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-09-26").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-03T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 14,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-04T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 25,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-10-05T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-06T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-07T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-08T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-09T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-10-03").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-10T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-11T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-12T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-13T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-14T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-15T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-10-16T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-10-10").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-17T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-18T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-19T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 34,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-10-20T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 26,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-10-21T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-22T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 17,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-23T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-10-17").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 33,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-10-24T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 18,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-25T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-26T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-27T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-10-28T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 35,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-10-29T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-10-30T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-10-24").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 30,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-10-31T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 40,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-11-01T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 27,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-11-02T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 24,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2021-11-03T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 42,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-11-04T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 51,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-11-05T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 21,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-06T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-10-31").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-07T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 35,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2021-11-08T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-09T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-10T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-11T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-12T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-13T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-11-07").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-14T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-15T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-16T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-17T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-18T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-19T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-11-20T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-11-14").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-11-21T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-22T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-11-23T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 17,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-24T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-11-25T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-26T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-27T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-11-21").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-11-28T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-11-29T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-11-30T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-01T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-02T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-03T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-04T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-11-28").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-05T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-06T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-07T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-08T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-09T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 1,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-10T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-11T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-12-05").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 0,
						contributionLevel: GitHubUserContributionLevel.None,
						date: dayjs("2021-12-12T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-13T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-14T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-15T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-16T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-17T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 5,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-18T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-12-12").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-19T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-20T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-21T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-22T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-23T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-24T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-25T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-12-19").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-26T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2021-12-27T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 21,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-28T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-29T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 13,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-30T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 14,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2021-12-31T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-01T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2021-12-26").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-02T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-03T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-04T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-05T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-06T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 8,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-07T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-08T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2022-01-02").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-09T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-10T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 16,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-11T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 14,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-12T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-13T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 2,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-14T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-15T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2022-01-09").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-16T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 21,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-17T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-18T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-19T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-20T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-21T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 9,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-22T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2022-01-16").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-23T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 19,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-24T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 10,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-25T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 4,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-26T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 7,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-27T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 15,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-28T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 3,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-01-29T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2022-01-23").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 12,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-01-30T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 25,
						contributionLevel: GitHubUserContributionLevel.ThirdQuartile,
						date: dayjs("2022-01-31T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 21,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-01T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 14,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-02T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 36,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2022-02-03T00:00:00.000+00:00").toDate(),
						weekday: 4
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 17,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-04T00:00:00.000+00:00").toDate(),
						weekday: 5
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 6,
						contributionLevel: GitHubUserContributionLevel.FirstQuartile,
						date: dayjs("2022-02-05T00:00:00.000+00:00").toDate(),
						weekday: 6
					}
				],
				firstDay: dayjs("2022-01-30").toDate()
			},
			{
				__typename: "GitHubUserContributionCalendarWeek",
				contributionDays: [
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-06T00:00:00.000+00:00").toDate(),
						weekday: 0
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 11,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-07T00:00:00.000+00:00").toDate(),
						weekday: 1
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 17,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-08T00:00:00.000+00:00").toDate(),
						weekday: 2
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 45,
						contributionLevel: GitHubUserContributionLevel.FourthQuartile,
						date: dayjs("2022-02-09T00:00:00.000+00:00").toDate(),
						weekday: 3
					},
					{
						__typename: "GitHubUserContributionCalendarDay",
						contributionCount: 20,
						contributionLevel: GitHubUserContributionLevel.SecondQuartile,
						date: dayjs("2022-02-10T00:00:00.000+00:00").toDate(),
						weekday: 4
					}
				],
				firstDay: dayjs("2022-02-06").toDate()
			}
		]
	},
	experiencers: {
		__typename: "UserConnection",
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
	followerCount: 0,
	login: "leedavidcs",
	name: "David Lee",
	repositories: {
		__typename: "GitHubRepositoryConnection",
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
	topLanguages: {
		...TopLanguages_fragment_mock,
		__typename: "TopLanguages"
	},
	totalCommits: 3_245,
	twitterUsername: "i3daly",
	url: "https://github.com/leedavidcs",
	user: null as any,
	websiteUrl: "https://leedavidcs.dev"
};
