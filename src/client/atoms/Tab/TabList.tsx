import { InferComponentProps } from "@/client/types";
import { Tab as HUITab } from "@headlessui/react";
import { LayoutGroup } from "framer-motion";
import tw, { styled } from "twin.macro";

export type TabListProps = InferComponentProps<typeof HUITab["List"]>;

export const TabList = styled(HUITab.List).attrs<TabListProps>(({ children, id }) => ({
	children: <LayoutGroup id={id}>{children}</LayoutGroup>
}))<TabListProps>`
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
