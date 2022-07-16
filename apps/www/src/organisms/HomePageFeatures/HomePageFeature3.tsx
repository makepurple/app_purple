import { LogoLeftWing } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";
import { HomePageFeature3Figure } from "../HomePageFeature3Figure";
import { HomePageFeaturesWaves } from "./HomePageFeaturesWaves";

const Root = tw.div`
	relative
	z-[1]
`;

const Background = tw.div`
	z-[-2]
	absolute
	inset-0
	bg-indigo-50
	2xl:clip-path[url(#home-section4-clip-path)]
`;

const Section = tw.div`
	flex
	flex-col
	items-center
	justify-center
	gap-8
	py-24
	px-4
	2xl:flex-row
	2xl:items-center
	2xl:gap-16
	2xl:py-64
`;

const Section4TopWaves = styled(HomePageFeaturesWaves)`
	${tw`
		hidden
		top-[72px]
		bottom-[auto]
		w-full
		rotate-[5deg]
		z-[-1]
		2xl:block
	`}

	@media (min-width: 1980px) {
		${tw`
			hidden
		`}
	}
`;

const Section3BottomWaves = styled.svg`
	${tw`
		hidden
		absolute
		left-1/2
		bottom-4
		-translate-x-1/2
		w-full
		scale-x-[1.2]
		2xl:block
	`}

	@media (min-width: 1980px) {
		${tw`
			hidden
		`}
	}
`;

const Mask = tw.svg`
	fixed
	pointer-events-none
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
	max-width[600px]
	2xl:gap-6
`;

const TextContainer = tw.div`
	flex
	flex-col
	items-start
	gap-5
`;

const Header = tw.h2`
	font-bold
	mt-5
	text-4xl
	2xl:mt-3
	2xl:text-6xl
`;

const Detail = tw.p`
	text-xl
	font-medium
	2xl:text-2xl
`;

const Figure = tw(HomePageFeature3Figure)`
	max-w-[540px]
`;

export interface HomePageFeature3Props {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature3: FC<HomePageFeature3Props> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Section4TopWaves />
			<Background />
			<Section>
				<InfoContainer>
					<LeftWing />
					<TextContainer>
						<Header>Your New Resume</Header>
						<Detail>
							Share your MakePurple profile with potential collaborators and employers
							with your experiences, skills and other demonstrations of your knowledge
						</Detail>
					</TextContainer>
				</InfoContainer>
				<Figure />
			</Section>
			<Section3BottomWaves
				width="1511"
				height="375"
				viewBox="0 0 1511 375"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 1C123.263 18.3799 427.027 89.9994 663.979 237.439C900.931 384.878 1414.06 384.081 1641 365.253"
					stroke="#B2B2FF"
					strokeWidth="1.5"
				/>
			</Section3BottomWaves>
			<Mask
				width="1524"
				height="1162"
				viewBox="0 0 1524 1162"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<clipPath
					id="home-section4-clip-path"
					clipPathUnits="objectBoundingBox"
					transform="scale(0.00065616797 0.00086058519)"
				>
					<path d="M1067 208.564C850.6 71.694 265.5 12.4921 0 0V820H1524V349.101C1461.83 359.285 1283.4 345.435 1067 208.564Z" />
					<path d="M457 960.008C687.87 1076.38 1258.5 1149.9 1524 1162L1524 601L4.90442e-05 601L2.87643e-05 832.975C62.1667 823.112 253.5 857.435 457 960.008Z" />
				</clipPath>
			</Mask>
		</Root>
	);
};
