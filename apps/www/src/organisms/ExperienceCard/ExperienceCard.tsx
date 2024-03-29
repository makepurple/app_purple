import { Avatar, Button, GitHubAvatarImage, Paper, Spinner, toast } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import tw, { styled } from "twin.macro";
import {
	ExperienceCardExperienceFragment,
	ExperienceType,
	useDeleteExperienceMutation,
	UserRole
} from "../../graphql";
import { PermissionUtils } from "../../utils";

const EditButton = tw(Button)`
	flex-shrink-0
	w-20
	opacity-100
	transition-opacity
	ease-in-out
	duration-150
	sm:flex-col
	sm:opacity-0
`;

const DeleteButton = tw(Button)`
	flex-shrink-0
	w-20
	opacity-100
	transition-opacity
	ease-in-out
	duration-150
	sm:flex-col
	sm:opacity-0
`;

const Root = styled(Paper)`
	${tw`
		flex
		flex-col
		gap-4
		items-start
		p-4
		sm:flex-row
	`}

	&:first-child ${EditButton} {
		${tw`
			opacity-100
		`}
	}

	&:hover {
		& ${EditButton}, & ${DeleteButton} {
			${tw`
				opacity-100
			`}
		}
	}
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
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
	text-base
	leading-none
	text-black
`;

const Timeframe = tw.div`
	text-sm
	leading-none
	text-gray-500
`;

const Location = tw.div`
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

const Actions = tw.div`
	flex-shrink-0
	flex
	flex-row
	items-stretch
	gap-2
	sm:flex-col
`;

export interface ExperienceCardProps {
	className?: string;
	experience: ExperienceCardExperienceFragment;
	onEdit?: (experience: ExperienceCardExperienceFragment) => void;
	style?: CSSProperties;
}

export const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>((props, ref) => {
	const { className, experience, onEdit, style } = props;

	const { data: session } = useSession();

	const isMyUser = session?.user.name === experience.user.name;

	const canDelete = useMemo(() => {
		if (isMyUser) return true;
		if (!session?.user) return false;

		return PermissionUtils.isGreaterRole(session.user.role as UserRole, experience.user.role);
	}, [experience, isMyUser, session?.user]);

	const [{ fetching: removing }, removeExperience] = useDeleteExperienceMutation();

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
			<StyledAvatar
				border={4}
				href={githubOrganization.url}
				target="_blank"
				rel="noopener noreferrer"
			>
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
				<OrganizationName tw="mt-2">
					{githubOrganization.name ?? githubOrganization.login}
				</OrganizationName>
				{timeframe && <Timeframe tw="mt-2">{timeframe}</Timeframe>}
				{experience.location && <Location tw="mt-2">{experience.location}</Location>}
				{!!experience.highlights.length && (
					<Highlights>
						{experience.highlights.map((highlight, i) => (
							<li key={i}>{highlight}</li>
						))}
					</Highlights>
				)}
			</Info>
			{isMyUser && (
				<Actions>
					<EditButton
						disabled={removing}
						onClick={(e) => {
							e.stopPropagation();

							onEdit?.(experience);
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						Edit
					</EditButton>
					{canDelete && (
						<DeleteButton
							disabled={removing}
							onClick={async (e) => {
								e.stopPropagation();

								const didSucceed = await removeExperience({
									where: { id: experience.id }
								})
									.then((result) => !!result.data?.deleteExperience)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not delete experience");

									return;
								}

								toast.success("Experience was successfully deleted");
							}}
							size="small"
							type="button"
							variant="alert"
						>
							{removing ? <Spinner /> : "Delete"}
						</DeleteButton>
					)}
				</Actions>
			)}
		</Root>
	);
});

ExperienceCard.displayName = "ExperienceCard";
