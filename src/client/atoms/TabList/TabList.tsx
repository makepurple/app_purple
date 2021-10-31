import { TabList as ReakitTabList } from "reakit";
import tw from "twin.macro";

export const TabList = tw(ReakitTabList)`
	grid
	grid-flow-row
	auto-rows-fr
	sm:grid-flow-col
	sm:auto-cols-fr
	p-1
	rounded-lg
`;
