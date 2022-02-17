import React, { CSSProperties, FC, ReactNode } from "react";
import tw from "twin.macro";
import { Paper } from "../../atoms";

const Root = tw(Paper)`
	flex
	flex-col
	items-center
	gap-3.5
	p-6
	sm:p-8
`;

const Title = tw.div`
	text-2xl
	leading-tight
	font-bold
	text-black
	text-center
`;

const SubTitle = tw.div`
	text-lg
	leading-tight
	text-gray-500
	whitespace-pre-wrap
	text-center
`;

const Content = tw.div`
	flex
	items-stretch
	text-gray-500
`;

export interface NonIdealStateProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	subTitle?: ReactNode;
	title?: Maybe<string>;
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
			{!!title && <Title>{title}</Title>}
			{!!subTitle && <SubTitle>{subTitle}</SubTitle>}
			{!!children && <Content>{children}</Content>}
		</Root>
	);
};
