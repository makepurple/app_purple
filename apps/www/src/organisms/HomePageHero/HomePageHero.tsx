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

const Line = tw.span`
	flex
	items-center
`;

export interface HomePageHeroProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageHero: FC<HomePageHeroProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Line>Discover</Line>
			<Line>Developers</Line>
			<Line>
				for <TypistLogo sentences={["next.js", "urql", "prisma"]} />
			</Line>
		</Root>
	);
};
