import { Tab } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { LayoutGroup } from "framer-motion";
import React from "react";
import tw, { styled } from "twin.macro";

export type TabListProps = InferComponentProps<typeof Tab["List"]>;

export const TabList: typeof Tab.List = styled(Tab.List).attrs<TabListProps>(
	({ children, id }) => ({
		children: <LayoutGroup id={id}>{children}</LayoutGroup>
	})
)<TabListProps>`
	${tw`
		grid
		grid-flow-row
		auto-rows-fr
		sm:grid-flow-col
		sm:auto-cols-fr
		p-1
		rounded-lg
	`}
`;
