import { Tab } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { LayoutGroup } from "framer-motion";
import React from "react";
import tw, { styled } from "twin.macro";
import { TabButton, TabSelection } from "./TabButton";

export type TabListProps = InferComponentProps<typeof Tab["List"]> & {
	size?: "small" | "medium" | "large";
};

export const TabList = styled(Tab.List).attrs<TabListProps>(({ children, id }) => ({
	children: <LayoutGroup id={id}>{children as any}</LayoutGroup>
}))<TabListProps>`
	${tw`
		grid
		auto-rows-fr
	`}

	${({ size = "medium" }) => {
		switch (size) {
			case "large":
				return tw`
					grid-template-columns[repeat(auto-fill, minmax(14rem, 1fr))]
					rounded-lg
				`;
			case "small":
				return tw`
					grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
					rounded
				`;
			case "medium":
			default:
				return tw`
					grid-template-columns[repeat(auto-fill, minmax(12rem, 1fr))]
					rounded-md
				`;
		}
	}}

	& ${TabButton},
	& ${TabSelection} {
		${({ size = "medium" }) => {
			switch (size) {
				case "large":
					return tw`
						px-4
						h-16
						rounded-lg
						text-lg
					`;
				case "small":
					return tw`
						px-1.5
						h-10
						rounded
						text-base
					`;
				case "medium":
				default:
					return tw`
						px-2.5
						h-14
						rounded-md
						text-lg
					`;
			}
		}}
	}
`;
