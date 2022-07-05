import { LogoLeftWing, LogoRightWing } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeature4Figure } from "../HomePageFeature4Figure";

const Root = tw.div`
	flex
	flex-col
	items-center
	justify-center
	gap-16
	pt-24
	pb-[384px]
	px-4
	2xl:pt-32
`;

const RightWing = tw(LogoRightWing)`
	flex-shrink-0
	w-6
	2xl:w-[auto]
`;

const LeftWing = tw(LogoLeftWing)`
	flex-shrink-0
	w-6
	2xl:w-[auto]
`;

const InfoContainer = tw.div`
	flex
	flex-row
	items-start
	gap-3
	max-w-[540px]
	2xl:max-w-[780px]
	2xl:gap-6
`;

const TextContainer = tw.div`
	flex
	flex-col
	items-center
	gap-5
`;

const HeaderContainer = tw.div`
	flex
	flex-row
	items-start
	justify-center
	gap-8
`;

const Header = tw.h2`
	w-[min-content]
	pt-5
	font-bold
	text-4xl
	text-center
	2xl:w-[max-content]
	2xl:pt-3
	2xl:text-6xl
`;

const Detail = tw.p`
	max-w-[540px]
	text-xl
	font-medium
	text-center
	2xl:text-2xl
`;

const Figure = tw(HomePageFeature4Figure)`
	max-w-[480px]
	lg:max-w-[unset]
`;

export interface HomePageFeature4Props {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature4: FC<HomePageFeature4Props> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<InfoContainer>
				<TextContainer>
					<HeaderContainer>
						<LeftWing />
						<Header>Searchable by GitHub</Header>
						<RightWing />
					</HeaderContainer>
					<Detail>
						Skills and users are searchable by GitHub organizations, users and
						repositories. Skills are defined as open-source repositories.
					</Detail>
				</TextContainer>
			</InfoContainer>
			<Figure />
		</Root>
	);
};
