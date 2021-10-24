import { Paper } from "@/client/atoms";
import React, { CSSProperties, FC, ReactNode } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-col
	items-center
	p-6
	sm:p-8
`;

const Title = tw.div`
	text-2xl
	leading-none
	font-bold
	text-black
	text-center
`;

const SubTitle = tw.div`
	mt-3
	text-lg
	leading-none
	text-gray-500
	whitespace-pre
	text-center
`;

const Content = tw.div`
	flex
	items-stretch
	mt-4
	text-gray-500
`;

export interface NonIdealStateProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	subTitle?: string;
	title?: string;
}

export const NonIdealState: FC<NonIdealStateProps> = ({
	children,
	className,
	style,
	subTitle,
	title = "Oops! Something went wrong"
}) => {
	return (
		<Root className={className} style={style}>
			<Title>{title}</Title>
			{!!subTitle && <SubTitle>{subTitle}</SubTitle>}
			{!!children && <Content>{children}</Content>}
		</Root>
	);
};
