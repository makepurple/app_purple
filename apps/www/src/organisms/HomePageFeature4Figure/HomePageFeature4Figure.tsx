import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { GitHubIcon } from "../../svgs";
import { HomePageFeature4FigureOwners } from "../HomePageFeature4FigureOwners";
import { HomePageFeature4FigureRepositories } from "../HomePageFeature4FigureRepositories";

const Root = tw.div`
	flex
	flex-col
	items-center
	justify-center
	gap-12
	w-full
	lg:flex-row
`;

const SearchOwners = tw(HomePageFeature4FigureOwners)`
	hidden
	lg:flex
	lg:w-[360px]
	2xl:w-[480px]
`;

const SearchRepositories = tw(HomePageFeature4FigureRepositories)`
	w-full
	lg:w-[360px]
	2xl:w-[480px]
`;

export interface HomePageFeature4FigureProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature4Figure: FC<HomePageFeature4FigureProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<SearchOwners />
			<GitHubIcon height={96} width={96} />
			<SearchRepositories />
		</Root>
	);
};
