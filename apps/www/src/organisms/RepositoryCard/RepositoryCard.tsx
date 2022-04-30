import {
	Anchor,
	Avatar,
	Button,
	FormGroup,
	GitHubAvatarImage,
	MaybeAnchor,
	Paper,
	Spinner,
	Tags,
	toast
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef, useMemo, useState } from "react";
import tw, { styled } from "twin.macro";
import {
	RepositoryCardRepositoryFragment,
	useDeleteRepositoryMutation,
	UserRole
} from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";
import { PermissionUtils } from "../../utils";
import { UpdateRepositoryCard } from "../UpdateRepositoryCard";

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
		cursor-pointer
		hover:bg-indigo-50
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

const StyledAvatar = styled(Avatar)<{ $organization: boolean }>`
	${tw`
		flex-shrink-0
	`}

	${({ $organization }) => $organization && tw`rounded-md`}
`;

const Details = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
`;

const Name = tw.h3`
	text-lg
	leading-none
	font-semibold
`;

const DescriptionContainer = tw.a`
	flex-grow
`;

const Description = tw.p`
	text-base
	line-clamp-2
`;

const Info = tw.div`
	flex
	flex-wrap
	items-center
	gap-y-2
	gap-x-3
	text-sm
	text-black
`;

const GitHubInfo = tw.div`
	flex
	items-center
	leading-none
`;

const StyledMaybeAnchor = tw(MaybeAnchor)`
	flex
	items-center
	leading-none
	color[inherit]
	hover:no-underline
`;

const LanguageColor = tw.div`
	h-3
	w-3
	rounded-full
`;

const Actions = tw.div`
	flex-shrink-0
	flex
	flex-row
	items-stretch
	gap-2
	sm:flex-col
`;

export interface RepositoryCardProps {
	className?: string;
	repository: RepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const RepositoryCard = forwardRef<HTMLDivElement, RepositoryCardProps>((props, ref) => {
	const { className, repository, style } = props;

	const { data: session } = useSession();

	const [editing, setEditing] = useState<boolean>(false);

	const primaryLanguage = repository.github.primaryLanguage;
	const license = repository.github.licenseInfo;
	const skills = repository.skills;
	const owner = repository.github.owner;

	const isMyRepository = session?.user.name === owner.login;

	const canDelete = useMemo(() => {
		if (isMyRepository) return true;
		if (!session?.user) return false;

		return PermissionUtils.isGreaterRole(session.user.role as UserRole, repository.user.role);
	}, [isMyRepository, repository.user.role, session?.user]);

	const [{ fetching: removing }, removeRepository] = useDeleteRepositoryMutation();

	if (editing) {
		return (
			<UpdateRepositoryCard
				ref={ref as any}
				className={className}
				onClose={() => {
					setEditing(false);
				}}
				repository={repository}
				style={style}
			/>
		);
	}

	return (
		<Root
			ref={ref}
			className={className}
			onClick={() => {
				window.open(repository.github.url, "_blank");
			}}
			style={style}
		>
			<>
				<StyledAvatar
					border={4}
					href={repository.github.url}
					target="_blank"
					rel="noopener noreferrer"
					$organization={owner.__typename === "GitHubOrganization"}
				>
					<GitHubAvatarImage
						alt={owner.login}
						src={owner.avatarUrl}
						height={64}
						width={64}
						title={owner.login}
					/>
				</StyledAvatar>
				<Details>
					<Anchor href={repository.github.url} target="_blank" rel="noopener noreferrer">
						<Name>{repository.name}</Name>
					</Anchor>
					{repository.github.description && (
						<DescriptionContainer
							href={repository.github.url}
							target="_blank"
							rel="noopener noreferrer"
							tabIndex={-1}
							tw="focus:ring-0"
						>
							<Description tw="mt-1">{repository.github.description}</Description>
						</DescriptionContainer>
					)}
					{!!skills.length && (
						<FormGroup tw="mt-3">
							<Tags
								onClick={(e) => {
									e.stopPropagation();
								}}
								type="positive"
								tw="relative"
							>
								{skills.map((skill) => (
									<NextLink
										key={skill.id}
										href="/s/[skillOwner]/[skillName]"
										as={`/s/${skill.owner}/${skill.name}`}
										passHref
									>
										<Tags.Tag
											id={skill.id}
											onClick={(e) => {
												e.stopPropagation();
											}}
											title={`${skill.owner}/${skill.name}`}
										>
											<span>{skill.name}</span>
										</Tags.Tag>
									</NextLink>
								))}
							</Tags>
						</FormGroup>
					)}
					<Info
						onClick={(e) => {
							e.stopPropagation();
						}}
						tw="mt-3"
					>
						{primaryLanguage && (
							<GitHubInfo>
								{primaryLanguage.color && (
									<LanguageColor
										style={{ backgroundColor: primaryLanguage.color }}
										tw="mr-1"
									/>
								)}
								<span>{primaryLanguage.name}</span>
							</GitHubInfo>
						)}
						{license && (
							<StyledMaybeAnchor
								href={license.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<LicenseIcon height={16} width={16} tw="mr-1" />
								<span>{license.spdxId ?? license.nickname ?? license.name}</span>
							</StyledMaybeAnchor>
						)}
						<StyledMaybeAnchor
							href={`${repository.github.url}/network/members`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ForkIcon height={16} width={16} tw="mr-1" />
							<span>{repository.github.forkCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						<StyledMaybeAnchor
							href={`${repository.github.url}/stargazers`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<StarIcon height={16} width={16} tw="mr-1" />
							<span>{repository.github.stargazerCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						<StyledMaybeAnchor
							href={`${repository.github.url}/issues`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<IssueIcon height={16} width={16} tw="mr-1" />
							<span>{repository.github.issueCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						<StyledMaybeAnchor
							href={`${repository.github.url}/pulls`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<PullRequestIcon height={16} width={16} tw="mr-1" />
							<span>{repository.github.pullRequestCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						{!!repository.github.pushedAt && (
							<span>Updated {dayjs(repository.github.pushedAt).fromNow()}</span>
						)}
					</Info>
				</Details>
				{isMyRepository && (
					<Actions>
						<EditButton
							disabled={removing}
							onClick={(e) => {
								e.stopPropagation();

								setEditing(true);
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

									const didSucceed = await removeRepository({
										where: { id: repository.id }
									})
										.then((result) => result.data?.deleteRepository)
										.catch(() => false);

									if (!didSucceed) {
										toast.error("Could not delete this repository");

										return;
									}

									toast.success("Repository was successfully deleted");
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
			</>
		</Root>
	);
});

RepositoryCard.displayName = "RepositoryCard";
