import { UrlUtils } from "@makepurple/utils";
import NextImage, { ImageProps } from "next/legacy/image";
import React, { FC } from "react";

export type GitHubAvatarImageProps = ImageProps;

export const GitHubAvatarImage: FC<GitHubAvatarImageProps> = (props) => {
	return (
		<NextImage
			{...props}
			loader={({ src, width }) => UrlUtils.appendQuery(src, { s: width })}
		/>
	);
};
