import {
	Avatar,
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	FormLabel,
	GitHubAvatarImage,
	HiddenInput,
	MaybeAnchor,
	Paper,
	Spinner,
	Tags,
	toast
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import React, { CSSProperties, forwardRef, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import tw, { styled } from "twin.macro";
import { RepositoryCardRepositoryFragment, useUpdateRepositoryMutation } from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";
import { SkillAutosuggest } from "../SkillAutosuggest";

const Root = styled(Paper)`
	${tw`
		flex
		flex-col
		gap-4
		items-start
		p-4
		sm:flex-row
	`}
`;

const StyledAvatar = styled(Avatar)<{ $organization: boolean }>`
	${tw`
		flex-shrink-0
		cursor-auto
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

const SaveButton = tw(FormButton)`
	flex-shrink-0
	w-20
`;

const CloseButton = tw(FormButton)`
	flex-shrink-0
	w-20
`;

interface SuggestedSkill {
	name: string;
	owner: string;
}

export interface UpdateRepositoryCardProps {
	className?: string;
	onClose?: () => void;
	repository: RepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const UpdateRepositoryCard = forwardRef<HTMLFormElement, UpdateRepositoryCardProps>(
	(props, ref) => {
		const { className, onClose, repository, style } = props;

		const primaryLanguage = repository.github.primaryLanguage;
		const license = repository.github.licenseInfo;

		const [{ data: updateData, fetching }, updateRepository] = useUpdateRepositoryMutation();

		const updateErrors = updateData?.updateRepository.errors;

		const {
			control,
			formState: { errors },
			handleSubmit,
			register,
			setError
		} = useForm<{
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

		useEffect(() => {
			updateErrors?.forEach((error) => {
				switch (error.__typename) {
					case "InvalidSkillError":
						setError("skills", { message: error.message });

						break;
					default:
				}
			});
		}, [setError, updateErrors]);

		return (
			<Root
				as={Form}
				ref={ref}
				className={className}
				disabled={fetching}
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

					onClose?.();
				})}
				style={style}
			>
				<>
					<StyledAvatar
						border={4}
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
						<Name>{repository.name}</Name>
						{repository.github.description && (
							<DescriptionContainer>
								<Description tw="mt-1">{repository.github.description}</Description>
							</DescriptionContainer>
						)}
						<FormGroup tw="mt-3">
							<FormLabel>Skills</FormLabel>
							<Tags
								editable
								onClick={(e) => {
									e.stopPropagation();
								}}
								type="positive"
								tw="relative"
							>
								{skills.fields.map((field, i) => (
									<Tags.Tag
										key={field._id}
										id={field._id}
										onClick={(e) => {
											e.stopPropagation();
										}}
										onRemove={() => skills.remove(i)}
										title={`${field.owner}/${field.name}`}
									>
										<HiddenInput {...register(`skills.${i}.name`)} />
										<HiddenInput {...register(`skills.${i}.owner`)} />
										<span>{field.name}</span>
									</Tags.Tag>
								))}
								<SkillAutosuggest
									onSelect={(newSkill) => {
										skills.append({
											name: newSkill.name,
											owner: newSkill.owner.login
										});
									}}
									aria-label="new skill"
								/>
							</Tags>
							<FormHelperText error={(errors.skills as any)?.message} />
						</FormGroup>
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
									<span>
										{license.spdxId ?? license.nickname ?? license.name}
									</span>
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
					<Actions
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<CloseButton
							disabled={fetching}
							onClick={() => {
								onClose?.();
							}}
							size="small"
							type="button"
							variant="secondary"
						>
							Close
						</CloseButton>
						<SaveButton disabled={fetching} size="small" type="submit">
							{fetching ? <Spinner /> : "Save"}
						</SaveButton>
					</Actions>
				</>
			</Root>
		);
	}
);

UpdateRepositoryCard.displayName = "UpdateRepositoryCard";
