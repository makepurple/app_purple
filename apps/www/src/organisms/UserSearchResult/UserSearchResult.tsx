import { Avatar, ComboBox, GitHubAvatarImage } from "@makepurple/components";
import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef } from "react";
import tw, { styled } from "twin.macro";
import { UserSearchResultGitHubUserFragment } from "../../graphql";

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-12
	w-12
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

const Bio = tw.div`
	text-sm
	leading-snug
	font-normal
	text-gray-500
	truncate
`;

const Root = styled(ComboBox.Option)`
	&[aria-selected="true"],
	&:hover {
		& ${Name as any}, & ${Bio as any} {
			${tw`
				text-white
			`}
		}
	}
`;

export interface UserSearchResultProps extends InferComponentProps<"div"> {
	href?: string;
	user: UserSearchResultGitHubUserFragment;
}

export const UserSearchResult = forwardRef<HTMLDivElement, UserSearchResultProps>((props, ref) => {
	const { href, user, title, ...restProps } = props;

	const Type = href ? "a" : "div";

	const name = user.name ?? user.login;

	return (
		<Root as={Type} ref={ref} title={name} {...restProps}>
			<StyledAvatar border={2} tw="mr-3">
				<GitHubAvatarImage src={user.avatarUrl} height={48} width={48} />
			</StyledAvatar>
			<Content tw="flex-grow">
				<Name>{name}</Name>
				{!!user.bio && <Bio>{user.bio}</Bio>}
			</Content>
		</Root>
	);
});

UserSearchResult.displayName = "UserSearchResult";
