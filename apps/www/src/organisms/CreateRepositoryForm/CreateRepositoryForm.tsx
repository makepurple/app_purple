import {
	Divider,
	FormGroup,
	FormLabel,
	Input,
	NonIdealState,
	RepoIcon,
	toast
} from "@makepurple/components";
import { useDebouncedCallback } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, Fragment, SyntheticEvent, useState } from "react";
import tw from "twin.macro";
import { useCreateRepositoryMutation, useSuggestRepositoriesQuery } from "../../graphql";
import { CreateRepositoryFormOption } from "../CreateRepositoryFormOption";
import { LoadingCreateRepositoryFormOption } from "../LoadingCreateRepositoryFormOption";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const RepositoryOptions = tw.div`
	flex
	flex-col
	items-stretch
	gap-4
`;

export interface CreateRepositoryFormProps {
	className?: string;
	onClose?: (event?: SyntheticEvent) => void;
	style?: CSSProperties;
}

export const CreateRepositoryForm: FC<CreateRepositoryFormProps> = ({
	className,
	onClose,
	style
}) => {
	const [query, setQuery] = useState<string>("");

	const handleChangeQuery = useDebouncedCallback(
		(newQuery: string) => {
			setQuery(newQuery);
		},
		[],
		ms("0.3s")
	);

	const [{ data, fetching }] = useSuggestRepositoriesQuery({
		variables: {
			first: 5,
			where: {
				name: query
			}
		}
	});

	const [{ fetching: creating }, createRepository] = useCreateRepositoryMutation();

	const repositories = data?.suggestRepositories.nodes ?? [];

	return (
		<Root className={className} style={style}>
			<FormGroup>
				<FormLabel>Search your repositories</FormLabel>
				<Input
					onChange={(e) => {
						handleChangeQuery(e.target.value);
					}}
					placeholder="Search..."
					type="search"
					value={query}
				/>
			</FormGroup>
			<RepositoryOptions tw="mt-6">
				{fetching ? (
					Array.from({ length: 3 }, (_, i) => (
						<Fragment key={i}>
							{!!i && <Divider />}
							<LoadingCreateRepositoryFormOption />
						</Fragment>
					))
				) : !repositories.length ? (
					<NonIdealState
						title="There's nothing here"
						subTitle="We couldn't find any repositories"
					>
						<RepoIcon height={96} width={96} />
					</NonIdealState>
				) : (
					repositories.map((repository, i) => (
						<Fragment key={repository.id}>
							{!!i && <Divider />}
							<CreateRepositoryFormOption
								disabled={creating || !!repository.repository}
								onAdd={async (newRepository) => {
									const didSucceed = await createRepository({
										data: {
											name: newRepository.name
										}
									})
										.then((result) => !!result.data?.createRepository.record)
										.catch(() => false);

									if (!didSucceed) {
										toast.error("Could not add this repository");

										return;
									}

									toast.success("Repository added! 🎉");

									onClose?.();
								}}
								repository={repository}
							/>
						</Fragment>
					))
				)}
			</RepositoryOptions>
		</Root>
	);
};
