import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { TypistLogo } from "../TypistLogo";

const Root = tw.div`
	flex
	flex-col
	items-center
	font-size[4.5rem]
	leading-none
	font-bold
	md:font-size[5.75rem]
`;

export interface HomePageHeroProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageHero: FC<HomePageHeroProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<span>GitHub-Powered</span>
			<span>Discovery for</span>
			<TypistLogo sentences={["next.js", "urql", "prisma"]} />
		</Root>
	);
};
