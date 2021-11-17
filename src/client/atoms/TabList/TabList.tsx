import { InferComponentProps } from "@/client/types";
import { LayoutGroup } from "framer-motion";
import { TabList as ReakitTabList } from "reakit";
import tw, { styled } from "twin.macro";

export type TabListProps = InferComponentProps<typeof ReakitTabList>;

export const TabList = styled(ReakitTabList).attrs<TabListProps>(({ children }) => ({
	children: <LayoutGroup>{children}</LayoutGroup>
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
