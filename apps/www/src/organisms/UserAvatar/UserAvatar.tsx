import { Avatar, AvatarProps, GitHubAvatarImage, PersonIcon } from "@makepurple/components";
import NextLink from "next/link";
import React, { forwardRef } from "react";
import tw from "twin.macro";
import { UserAvatarUserFragment } from "../../graphql";

const StyledAvatar = tw(Avatar)`
	cursor-auto
`;

export interface UserAvatarProps extends AvatarProps {
	asLink?: boolean;
	height?: number;
	user?: Maybe<UserAvatarUserFragment>;
	width?: number;
}

export const UserAvatar = forwardRef<HTMLAnchorElement, UserAvatarProps>((props, ref) => {
	const {
		asLink = true,
		border = 1,
		height: _height,
		user,
		width: _width,
		...avatarProps
	} = props;

	const height: number = _height ?? _width ?? 48;
	const width: number = _width ?? _height ?? 48;

	if (!user) {
		return (
			<StyledAvatar border={border} {...avatarProps} ref={ref}>
				<PersonIcon height={height} width={width} />
			</StyledAvatar>
		);
	}

	const component = (
		<Avatar border={border} {...avatarProps} ref={ref}>
			{user.image ? (
				<GitHubAvatarImage alt={user.name} src={user.image} height={height} width={width} />
			) : (
				<PersonIcon height={height} width={width} />
			)}
		</Avatar>
	);

	return asLink ? (
		<NextLink href="/[userName]" as={`/${user.name}`} passHref>
			{component}
		</NextLink>
	) : (
		component
	);
});

UserAvatar.displayName = "UserAvatar";
