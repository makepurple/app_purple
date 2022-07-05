import { Avatar, ComboBox, GitHubAvatarImage } from "@makepurple/components";
import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef } from "react";
import tw, { styled } from "twin.macro";
import { OrganizationSearchResultGitHubOrganizationFragment } from "../../graphql";

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-12
	w-12
	rounded-md
`;

const Content = tw.div`
	flex
	flex-col
	gap-1
	items-start
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

export interface OrganizationSearchResultProps extends InferComponentProps<"div"> {
	href?: string;
	organization: OrganizationSearchResultGitHubOrganizationFragment;
}

export const OrganizationSearchResult = forwardRef<HTMLDivElement, OrganizationSearchResultProps>(
	(props, ref) => {
		const { href, organization, title, ...restProps } = props;

		const Type = href ? "a" : "div";

		const name = organization.name ?? organization.login;

		return (
			<Root as={Type} ref={ref} title={name} {...restProps}>
				<StyledAvatar border={2} tw="mr-3">
					<GitHubAvatarImage src={organization.avatarUrl} height={48} width={48} />
				</StyledAvatar>
				<Content tw="flex-grow">
					<Name>{name}</Name>
					{!!organization.description && (
						<Description>{organization.description}</Description>
					)}
				</Content>
			</Root>
		);
	}
);

OrganizationSearchResult.displayName = "OrganizationSearchResult";
