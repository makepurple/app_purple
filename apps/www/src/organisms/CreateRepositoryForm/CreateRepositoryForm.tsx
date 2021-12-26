import { FormGroup, FormLabel, Input } from "@makepurple/components";
import React, { CSSProperties, FC, useState } from "react";
import tw from "twin.macro";
import { useSuggestRepositoriesQuery } from "../../graphql";
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
	gap-6
`;

export interface CreateRepositoryFormProps {
	className?: string;
	style?: CSSProperties;
}

export const CreateRepositoryForm: FC<CreateRepositoryFormProps> = ({ className, style }) => {
	const [query, setQuery] = useState<string>("");

	const [{ data }] = useSuggestRepositoriesQuery({
		variables: {
			first: 5,
			where: {
				name: query
			}
		}
	});

	const fetching = false;
	const disabled = false;

	const repositories = data?.suggestRepositories.nodes ?? [];

	return (
		<Root className={className} style={style}>
			<FormGroup>
				<FormLabel>Search your repositories</FormLabel>
				<Input
					onChange={(e) => {
						setQuery(e.target.value);
					}}
					placeholder="Search..."
					type="search"
					value={query}
				/>
			</FormGroup>
			<RepositoryOptions tw="mt-6">
				{fetching
					? Array.from({ length: 3 }, (_, i) => (
							<LoadingCreateRepositoryFormOption key={i} />
					  ))
					: repositories.map((repository) => (
							<CreateRepositoryFormOption
								key={repository.id}
								disabled={disabled || !!repository.repository}
								onAdd={(toAddRepository) => {
									console.log(toAddRepository);
								}}
								repository={repository}
							/>
					  ))}
			</RepositoryOptions>
		</Root>
	);
};
