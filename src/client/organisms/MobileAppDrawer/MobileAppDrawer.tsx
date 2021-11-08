import { Backdrop, SideDrawer, SideDrawerProps } from "@/client/atoms";
import React, { CSSProperties, FC } from "react";
import type { DialogStateReturn } from "reakit";
import tw from "twin.macro";

const Root = tw(Backdrop)`
	sm:hidden
`;

const MobileDrawer = tw(SideDrawer)`
	flex
	flex-col
	pt-16
	pointer-events-none
	sm:hidden
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
	pointer-events-auto
`;

export type MobileAppDrawerProps = DialogStateReturn & {
	className?: string;
	style?: CSSProperties;
};

export const MobileAppDrawer: FC<SideDrawerProps> = (props) => {
	const { className, style, ...dialogProps } = props;

	return (
		<Root {...dialogProps}>
			<MobileDrawer {...dialogProps} className={className} style={style}>
				<Content>
					<div />
				</Content>
			</MobileDrawer>
		</Root>
	);
};
