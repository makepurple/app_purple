import {
	Anchor,
	Avatar,
	Form,
	FormButton,
	GitHubAvatarImage,
	HiddenInput,
	MaybeAnchor,
	Spinner,
	Tags
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import React, { cloneElement, CSSProperties, forwardRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw, { styled } from "twin.macro";
import { RepositoryCardRepositoryFragment, useUpdateRepositoryMutation } from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";
import { SkillAutosuggest } from "../SkillAutosuggest";

const Root = styled.div`
	${tw`
		flex
		items-start
		py-4
		cursor-pointer
	`}
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const Details = tw.div`
	flex-grow
	flex
	flex-col
	items-start
`;

const Name = tw.h3`
	text-lg
	leading-none
	font-semibold
`;

const Description = tw.p`
	text-base
	line-clamp-2
`;

const Info = tw.div`
	flex
	flex-wrap
	items-center
	gap-3.5
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

const SaveButton = tw(FormButton)`
	flex-shrink-0
	w-20
`;

interface SuggestedSkill {
	name: string;
	owner: string;
}

export interface RepositoryCardProps {
	className?: string;
	editing?: boolean;
	repository: RepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const RepositoryCard = forwardRef<HTMLDivElement, RepositoryCardProps>((props, ref) => {
	const { className, editing, repository, style } = props;

	const primaryLanguage = repository.github.primaryLanguage;
	const license = repository.github.licenseInfo;

	const [{ fetching: updating }, updateRepository] = useUpdateRepositoryMutation();

	const { control, handleSubmit, register } = useForm<{
		skills: readonly SuggestedSkill[];
	}>({
		defaultValues: {
			skills: repository.skills.map((skill) => ({
				name: skill.name,
				owner: skill.owner
			}))
		}
	});

	const owner = repository.github.owner;
	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });

	const parent = editing ? (
		<Root
			as={Form}
			ref={ref as any}
			disabled={updating}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = await updateRepository({
					data: {
						skills: formData.skills.map((skill) => ({
							name_owner: {
								name: skill.name,
								owner: skill.owner
							}
						}))
					},
					where: {
						id: repository.id
					}
				})
					.then((result) => !!result.data?.updateRepository.record)
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Could not update repository details");

					return;
				}

				toast.success("Repository details were updated! 🎉");
			})}
		/>
	) : (
		<Root
			ref={ref}
			onClick={() => {
				window.open(repository.github.url, "_blank");
			}}
		/>
	);

	return cloneElement(
		parent,
		{ className, style },
		<>
			{owner.__typename === "GitHubOrganization" && owner.avatarUrl && (
				<StyledAvatar
					border={4}
					href={repository.github.url}
					target="_blank"
					rel="noopener noreferrer"
					tw="mr-6"
				>
					<GitHubAvatarImage
						alt={owner.login}
						src={owner.avatarUrl}
						height={64}
						width={64}
						title={owner.login}
					/>
				</StyledAvatar>
			)}
			<Details>
				<Anchor href={repository.github.url} target="_blank" rel="noopener noreferrer">
					<Name>{repository.name}</Name>
				</Anchor>
				{repository.github.description && (
					<a
						href={repository.github.url}
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={-1}
						tw="focus:ring-0"
					>
						<Description tw="mt-1">{repository.github.description}</Description>
					</a>
				)}
				<Tags
					editable={editing}
					onClick={(e) => {
						e.stopPropagation();
					}}
					type="positive"
					tw="relative mt-3"
				>
					{skills.fields.map((field, i) => (
						<Tags.Tag
							key={field._id}
							id={field._id}
							onRemove={() => skills.remove(i)}
							tw="cursor-auto"
						>
							{editing && (
								<>
									<HiddenInput {...register(`skills.${i}.name`)} />
									<HiddenInput {...register(`skills.${i}.owner`)} />
								</>
							)}
							<span>{field.name}</span>
						</Tags.Tag>
					))}
					<SkillAutosuggest
						onSelect={(newSkill) => {
							skills.append({
								name: newSkill.name,
								owner: newSkill.owner
							});
						}}
						aria-label="new skill"
					/>
				</Tags>
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
			{editing && (
				<SaveButton size="small" type="submit" tw="ml-2">
					{updating ? <Spinner /> : "Save"}
				</SaveButton>
			)}
		</>
	);
});

RepositoryCard.displayName = "RepositoryCard";
