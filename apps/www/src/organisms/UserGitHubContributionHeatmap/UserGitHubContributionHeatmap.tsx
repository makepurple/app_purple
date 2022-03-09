import { Logo, Tooltip } from "@makepurple/components";
import { useRerender, useResizeObserver } from "@makepurple/hooks";
import { dayjs, WindowUtils } from "@makepurple/utils";
import { AxisLeft, AxisTop } from "@visx/axis";
import { Group } from "@visx/group";
import { HeatmapRect } from "@visx/heatmap";
import { RectCell } from "@visx/heatmap/lib/heatmaps/HeatmapRect";
import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import React, { CSSProperties, memo, useCallback, useMemo } from "react";
import tw from "twin.macro";
import {
	GitHubUserContributionLevel,
	UserGitHubContributionHeatmapGitHubUserContributionCalendarFragment
} from "../../graphql";

const GAP = 3;
const MARGIN_TOP = 20;
const MARGIN_LEFT = 35;
const MARGIN_RIGHT = 2;

const Root = tw.div`
	aspect-h-2
	aspect-w-13
	flex
	items-center
`;

const StyledParentSize = tw(ParentSize)`
	flex
	items-center
	justify-center
`;

const StyledLogo = tw(Logo)`
	h-14
	w-14
`;

const Rect = tw.rect`
	cursor-pointer
`;

export interface UserGitHubContributionHeatmapProps {
	className?: string;
	contributionCalendar: UserGitHubContributionHeatmapGitHubUserContributionCalendarFragment;
	style?: CSSProperties;
}

export const UserGitHubContributionHeatmap = memo<UserGitHubContributionHeatmapProps>((props) => {
	const { className, contributionCalendar, style } = props;

	const rerender = useRerender();

	useResizeObserver(
		WindowUtils.getElement(() => document.body),
		() => {
			rerender();
		}
	);

	const weeks = useMemo(() => contributionCalendar.weeks.slice(), [contributionCalendar.weeks]);

	const bucketSizeMax = useMemo(
		() => Math.max(...weeks.map((week) => week.contributionDays.length)),
		[weeks]
	);

	const xScale = useMemo(
		() => scaleLinear<number>({ domain: [0, contributionCalendar.weeks.length] }),
		[contributionCalendar.weeks.length]
	);

	const yScale = useMemo(
		() => scaleLinear<number>({ domain: [bucketSizeMax, 0] }),
		[bucketSizeMax]
	);

	const getColor = useCallback((level: GitHubUserContributionLevel) => {
		switch (level) {
			case GitHubUserContributionLevel.FirstQuartile:
				return "#9be9a8";
			case GitHubUserContributionLevel.SecondQuartile:
				return "#40c463";
			case GitHubUserContributionLevel.ThirdQuartile:
				return "#30a14e";
			case GitHubUserContributionLevel.FourthQuartile:
				return "#b4fbde";
			default:
				return "#122549";
		}
	}, []);

	return (
		<Root className={className} style={style}>
			<StyledParentSize>
				{({ width }) => {
					if (!width) return <StyledLogo href={null} />;

					const height = Math.floor((width * 25) / 165);
					const binWidth = width / weeks.length;

					xScale.range([0, width - MARGIN_LEFT - MARGIN_RIGHT]);
					yScale.range([height - MARGIN_TOP, 0]);

					return (
						<svg height={Math.max(height, 0)} width={Math.max(width, 0)}>
							<AxisTop
								top={MARGIN_TOP}
								left={MARGIN_LEFT}
								scale={xScale}
								tickFormat={(week) => {
									const todayOfWeek = dayjs().day();
									const weeksBefore = 52 - week.valueOf();

									if (weeksBefore <= 1) return "";

									const date = dayjs().subtract(52 - week.valueOf(), "week");
									const dayOfMonth = parseInt(date.format("D")) - todayOfWeek;

									return dayOfMonth >= 1 && dayOfMonth <= 7
										? date.format("MMM")
										: "";
								}}
								hideAxisLine
								hideTicks
								numTicks={52}
								tickLabelProps={() => ({
									fill: "#000",
									fontSize: 11,
									lineHeight: 1,
									textAnchor: "start",
									verticalAnchor: "end"
								})}
							/>
							<AxisLeft
								top={MARGIN_TOP}
								left={MARGIN_LEFT}
								scale={yScale}
								tickFormat={(weekday) => {
									switch (weekday.valueOf()) {
										case 1.5:
											return "Mon";
										case 3.5:
											return "Wed";
										case 5.5:
											return "Fri";
										default:
											return "";
									}
								}}
								hideAxisLine
								hideTicks
								tickLabelProps={() => ({
									fill: "#000",
									fontSize: 11,
									lineHeight: 1,
									textAnchor: "end",
									verticalAnchor: "middle"
								})}
							/>
							<Group top={MARGIN_TOP} left={MARGIN_LEFT}>
								<HeatmapRect
									binHeight={binWidth}
									binWidth={binWidth}
									bins={(d) => d.contributionDays.slice()}
									data={weeks}
									gap={GAP}
									xScale={(d) => xScale(d) ?? 0}
									yScale={(d) => yScale(d) ?? 0}
								>
									{(
										heatmap: RectCell<
											typeof weeks[number],
											typeof weeks[number]["contributionDays"][number]
										>[][]
									) =>
										heatmap.map((bins) =>
											bins.map((bin) => {
												const datum = bin.bin;
												const count = datum.contributionCount;
												const level = datum.contributionLevel;
												/**
												 * !HACK
												 * @description For some reason, GitHub contribution calendar is 1-day
												 * offset from what is shown on GitHub's profile page. So we're adding 1
												 * day to compensate.
												 * @author David Lee
												 * @date February 10, 2022
												 */
												const date = dayjs(datum.date)
													.add(1, "day")
													.format("MMM D, YYYY");

												return (
													<Tooltip
														key={`${bin.row}:${bin.column}`}
														content={`${count.toLocaleString()} contributions on ${date}`}
													>
														<Rect
															width={Math.max(bin.width, 0)}
															height={Math.max(bin.height, 0)}
															x={bin.x + GAP / 2}
															y={bin.y - GAP}
															stroke="#888"
															strokeWidth={1}
															strokeOpacity={0.5}
															fill={!count ? "#aaa" : getColor(level)}
															fillOpacity={!count ? 0.3 : 0.8}
															rx={2}
															onClick={() => {
																alert(JSON.stringify(datum));
															}}
														/>
													</Tooltip>
												);
											})
										)
									}
								</HeatmapRect>
							</Group>
						</svg>
					);
				}}
			</StyledParentSize>
		</Root>
	);
});

UserGitHubContributionHeatmap.displayName = "UserGitHubContributionHeatmap";
