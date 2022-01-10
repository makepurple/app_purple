import { Avatar, AvatarProps, GitHubAvatarImage, PersonIcon } from "@makepurple/components";
import NextLink from "next/link";
import React, { forwardRef } from "react";
import { UserAvatarUserFragment } from "../../graphql";

export interface UserAvatarProps extends AvatarProps {
	height?: number;
	user: UserAvatarUserFragment;
	width?: number;
}

export const UserAvatar = forwardRef<HTMLAnchorElement, UserAvatarProps>((props, ref) => {
	const { border = 1, height: _height, user, width: _width, ...avatarProps } = props;

	const height: number = _height ?? _width ?? 48;
	const width: number = _width ?? _height ?? 48;

	return (
		<NextLink href="/[userName]" as={`/${user.name}`} passHref>
			<Avatar border={border} {...avatarProps} ref={ref}>
				{user.image ? (
					<GitHubAvatarImage
						alt={user.name}
						src={user.image}
						height={height}
						width={width}
					/>
				) : (
					<PersonIcon height={height} width={width} />
				)}
			</Avatar>
		</NextLink>
	);
});

UserAvatar.displayName = "UserAvatar";
