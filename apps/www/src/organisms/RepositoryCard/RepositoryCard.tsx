import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { RepositoryCardRepositoryFragment } from "../../graphql";

const Root = tw.div`
	flex
	items-start
	py-4
`;

const Info = tw.div`
	flex
	flex-col
`;

const Name = tw.h2`
	text-lg
	leading-none
	font-semibold
`;

const Description = tw.p`
	text-base
	line-clamp-2
`;

export interface RepositoryCardProps {
	className?: string;
	repository: RepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const RepositoryCard = forwardRef<HTMLDivElement, RepositoryCardProps>((props, ref) => {
	const { className, repository, style } = props;

	return (
		<Root ref={ref} className={className} style={style}>
			<Info>
				<Name>{repository.name}</Name>
				{repository.github.description && (
					<Description tw="mt-1">{repository.github.description}</Description>
				)}
			</Info>
		</Root>
	);
});

RepositoryCard.displayName = "RepositoryCard";
