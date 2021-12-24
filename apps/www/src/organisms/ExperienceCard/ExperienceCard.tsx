import { Avatar, Button, GitHubAvatarImage, PencilIcon } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import tw, { styled } from "twin.macro";
import { ExperienceCardExperienceFragment, ExperienceType } from "../../graphql";

const EditButton = tw(Button)`
	flex-shrink-0
	h-12
	w-12
	p-0
	ml-2
	opacity-100
	transition
	duration-150
	ease-in
	sm:opacity-0
`;

const Root = styled.div`
	${tw`
		flex
		items-start
		py-4
	`}

	&:first-child ${EditButton} {
		${tw`
			opacity-100
		`}
	}

	&:hover ${EditButton} {
		${tw`
			opacity-100
		`}
	}
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-16
	w-16
	mr-6
	rounded-md
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
`;

const PositionName = tw.h3`
	text-lg
	leading-none
	font-semibold
	text-black
`;

const PositionType = tw.span`
	text-base
	leading-none
	text-gray-500
	font-normal
`;

const OrganizationName = tw.h4`
	mt-1
	text-base
	leading-none
	text-black
`;

const Timeframe = tw.div`
	mt-1
	text-sm
	leading-none
	text-gray-500
`;

const Location = tw.div`
	mt-1
	text-sm
	leading-none
	text-gray-500
`;

const Highlights = tw.ul`
	mt-2
	list-style-type["– "]
	list-inside
	marker:font-bold
	marker:text-blue-500
`;

export interface ExperienceCardProps {
	className?: string;
	experience: ExperienceCardExperienceFragment;
	onEdit?: (experience: ExperienceCardExperienceFragment) => void;
	style?: CSSProperties;
}

export const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>((props, ref) => {
	const { className, experience, onEdit, style } = props;

	const githubOrganization = experience.organization.github;

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

	return (
		<Root ref={ref} className={className} style={style}>
			<StyledAvatar border={4}>
				<GitHubAvatarImage
					alt={githubOrganization.name ?? ""}
					src={githubOrganization.avatarUrl}
					height={64}
					width={64}
					title={githubOrganization.name ?? undefined}
				/>
			</StyledAvatar>
			<Info>
				{experience.positionName && (
					<PositionName>
						{experience.positionName}
						{experienceType && (
							<PositionType tw="ml-1">({experienceType})</PositionType>
						)}
					</PositionName>
				)}
				<OrganizationName>
					{githubOrganization.name ?? githubOrganization.login}
				</OrganizationName>
				{timeframe && <Timeframe>{timeframe}</Timeframe>}
				{experience.location && <Location>{experience.location}</Location>}
				{experience.highlights.length && (
					<Highlights>
						{experience.highlights.map((highlight, i) => (
							<li key={i}>{highlight}</li>
						))}
					</Highlights>
				)}
			</Info>
			<EditButton
				onClick={() => {
					onEdit?.(experience);
				}}
				type="button"
				variant="secondary"
			>
				<PencilIcon height={24} width={24} />
			</EditButton>
		</Root>
	);
});

ExperienceCard.displayName = "ExperienceCard";
