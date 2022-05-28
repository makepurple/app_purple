import { Avatar, GitHubAvatarImage } from "@makepurple/components";
import { useOnKeyDown } from "@makepurple/hooks";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, useMemo } from "react";
import tw from "twin.macro";
import { ExperienceType, UserOverviewExperienceCardExperienceFragment } from "../../graphql";

const Root = tw.div`
	flex
	flex-row
	items-start
	p-2
	cursor-pointer
	hover:bg-violet-50
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const Contents = tw.a`
	self-stretch
	flex-grow
	flex
	flex-col
`;

const PositionName = tw.span`
	leading-none
	font-semibold
	text-black
`;

const PositionType = tw.span`
	text-sm
	leading-none
	text-gray-500
	font-normal
`;

const OrganizationName = tw.span`
	text-sm
	leading-none
	text-gray-500
`;

const Timeframe = tw.div`
	text-sm
	leading-none
	text-black
`;

export interface UserOverviewExperienceCardProps {
	className?: string;
	experience: UserOverviewExperienceCardExperienceFragment;
	style?: CSSProperties;
}

export const UserOverviewExperienceCard: FC<UserOverviewExperienceCardProps> = ({
	className,
	experience,
	style
}) => {
	const router = useRouter();

	const organization = experience.organization.github;

	const experienceType = useMemo(() => {
		switch (experience.type) {
			case ExperienceType.Contract:
				return "contract";
			case ExperienceType.FullTime:
				return "full-time";
			case ExperienceType.Intern:
				return "intern";
			case ExperienceType.OpenSource:
				return "open-source";
			case ExperienceType.PartTime:
				return "part-time";
			default:
				return null;
		}
	}, [experience.type]);

	const startDate = useMemo(
		() => experience.startDate && dayjs(experience.startDate).format("MMM YYYY"),
		[experience.startDate]
	);

	const endDate = useMemo(
		() => (experience.endDate ? dayjs(experience.endDate).format("MMM YYYY") : "Present"),
		[experience.endDate]
	);

	const duration = useMemo(() => {
		if (!experience.startDate) return null;

		const experienceEnd = experience.endDate ?? new Date();

		return dayjs(experienceEnd).to(experience.startDate, true);
	}, [experience.startDate, experience.endDate]);

	const timeframe = useMemo(() => {
		if (!startDate || !duration) return null;

		return `${startDate} – ${endDate} • ${duration}`;
	}, [startDate, endDate, duration]);

	const onEnter = useOnKeyDown({ key: "ENTER", global: false }, async () => {
		await router.push("/s/[skillOwner]", `/s/${organization.name}`);
	});

	return (
		<Root
			className={className}
			onClick={async () => {
				await router.push("/s/[skillOwner]", `/s/${organization.name}`);
			}}
			onKeyDown={onEnter}
			role="link"
			style={style}
			tabIndex={0}
			data-href={`/s/${organization.name}`}
		>
			<NextLink href="/s/[skillOwner]" as={`/s/${organization.login}`} passHref>
				<StyledAvatar
					border={3}
					onClick={(e) => {
						e.stopPropagation();
					}}
					tw="mr-3"
					aria-label={organization.login}
				>
					<GitHubAvatarImage
						alt={organization.login}
						src={organization.avatarUrl}
						height={36}
						width={36}
					/>
				</StyledAvatar>
			</NextLink>
			<NextLink href="/s/[skillOwner]" as={`/s/${organization.login}`} passHref>
				<Contents>
					{experience.positionName && (
						<PositionName>
							{experience.positionName}
							{experienceType && (
								<PositionType tw="ml-2">({experienceType})</PositionType>
							)}
						</PositionName>
					)}
					<OrganizationName tw="mt-1">@{organization.name}</OrganizationName>
					{timeframe && <Timeframe tw="mt-2">{timeframe}</Timeframe>}
				</Contents>
			</NextLink>
		</Root>
	);
};
