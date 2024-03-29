import { FormButton, Spinner, toast } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import {
	CreateRepositoryFormOptionGitHubRepositoryFragment,
	useCreateRepositoryMutation
} from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";

const Root = tw.div`
	flex
	items-start
`;

const Details = tw.div`
	flex-grow
`;

const Name = tw.div`
	text-lg
	leading-none
	font-semibold
`;

const Description = tw.p`
	text-base
	line-clamp-2
`;

const Metrics = tw.div`
	flex
	flex-wrap
	items-center
	gap-3.5
	text-sm
	text-black
`;

const Metric = tw.span`
	flex
	items-center
`;

const GitHubInfo = tw.div`
	flex
	items-center
	leading-none
`;

const LanguageColor = tw.div`
	h-3
	w-3
	rounded-full
`;

const AddButton = tw(FormButton)`
	flex-shrink-0
	w-20
`;

export interface CreateRepositoryFormOptionProps {
	className?: string;
	onAdd?: () => void;
	repository: CreateRepositoryFormOptionGitHubRepositoryFragment;
	style?: CSSProperties;
}

export const CreateRepositoryFormOption: FC<CreateRepositoryFormOptionProps> = ({
	className,
	onAdd,
	repository,
	style
}) => {
	const [{ fetching: creating }, createRepository] = useCreateRepositoryMutation();

	const primaryLanguage = repository.primaryLanguage;
	const license = repository.licenseInfo;

	return (
		<Root className={className} style={style}>
			<Details>
				<Name>{repository.name}</Name>
				<Description tw="mt-1">{repository.description}</Description>
				<Metrics tw="mt-1">
					{primaryLanguage && (
						<GitHubInfo>
							{primaryLanguage.color && (
								<LanguageColor
									style={{
										backgroundColor: primaryLanguage.color
									}}
									tw="mr-1"
								/>
							)}
							<span>{primaryLanguage.name}</span>
						</GitHubInfo>
					)}
					{license && (
						<Metric>
							<LicenseIcon height={16} width={16} tw="mr-1" />
							<span>{license.spdxId ?? license.nickname ?? license.name}</span>
						</Metric>
					)}
					<Metric>
						<ForkIcon height={16} width={16} tw="mr-1" />
						<span>{repository.forkCount.toLocaleString()}</span>
					</Metric>
					<Metric>
						<StarIcon height={16} width={16} tw="mr-1" />
						<span>{repository.stargazerCount.toLocaleString()}</span>
					</Metric>
					<Metric>
						<IssueIcon height={16} width={16} tw="mr-1" />
						<span>{repository.issueCount.toLocaleString()}</span>
					</Metric>
					<Metric>
						<PullRequestIcon height={16} width={16} tw="mr-1" />
						<span>{repository.pullRequestCount.toLocaleString()}</span>
					</Metric>
					{!!repository.pushedAt && (
						<span>Updated {dayjs(repository.pushedAt).fromNow()}</span>
					)}
				</Metrics>
			</Details>
			<AddButton
				disabled={creating || !!repository.repository}
				onClick={async () => {
					const didSucceed = await createRepository({
						data: {
							name: repository.name
						}
					})
						.then((result) => !!result.data?.createRepository.record)
						.catch(() => false);

					if (!didSucceed) {
						toast.error("Could not add this repository");

						return;
					}

					toast.success("Repository added! 🎉");

					onAdd?.();
				}}
				size="small"
				type="button"
				tw="ml-2"
			>
				<span>Add</span>
				{creating && <Spinner tw="ml-2" />}
			</AddButton>
		</Root>
	);
};
