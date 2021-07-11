import { UrlUtils } from "@/utils";
import { FC } from "hoist-non-react-statics/node_modules/@types/react";
import NextImage, { ImageProps } from "next/image";
import React from "react";

export type GitHubAvatarImageProps = ImageProps;

export const GitHubAvatarImage: FC<GitHubAvatarImageProps> = (props) => {
	return (
		<NextImage
			{...props}
			loader={({ src, width }) => UrlUtils.appendQuery(src, { s: width })}
		/>
	);
};
