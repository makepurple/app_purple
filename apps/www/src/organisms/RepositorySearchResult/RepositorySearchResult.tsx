import { Avatar, ComboBox, GitHubAvatarImage } from "@makepurple/components";
import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef } from "react";
import tw, { styled } from "twin.macro";
import { RepositorySearchResultGitHubRepositoryFragment } from "../../graphql";

const StyledAvatar = styled(Avatar)<{ $isOrganization: boolean }>`
	${tw`
		flex-shrink-0
		h-12
		w-12
	`}

	${({ $isOrganization }) => $isOrganization && tw`rounded-md`}
`;

const Content = tw.div`
	flex
	flex-col
	gap-1
	justify-start
	overflow-hidden
`;

const Name = tw.div`
	text-lg
	font-semibold
	leading-none
	truncate
`;

const Description = tw.div`
	text-sm
	leading-snug
	font-normal
	text-gray-500
	truncate
`;

const Root = styled(ComboBox.Option)`
	&[aria-selected="true"],
	&:hover {
		& ${Name as any}, & ${Description as any} {
			${tw`
				text-white
			`}
		}
	}
`;

export interface RepositorySearchResultProps extends InferComponentProps<"div"> {
	href?: string;
	repository: RepositorySearchResultGitHubRepositoryFragment;
}

export const RepositorySearchResult = forwardRef<HTMLDivElement, RepositorySearchResultProps>(
	(props, ref) => {
		const { href, repository, title, ...restProps } = props;

		const Type = href ? "a" : "div";

		const owner = repository.owner;

		return (
			<Root as={Type} ref={ref} title={repository.name} {...restProps}>
				<StyledAvatar
					border={2}
					tw="mr-3"
					$isOrganization={owner.__typename === "GitHubOrganization"}
				>
					<GitHubAvatarImage src={owner.avatarUrl} height={48} width={48} />
				</StyledAvatar>
				<Content tw="flex-grow">
					<Name>{repository.name}</Name>
					{!!repository.description && (
						<Description>{repository.description}</Description>
					)}
				</Content>
			</Root>
		);
	}
);

RepositorySearchResult.displayName = "RepositorySearchResult";
