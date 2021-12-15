import { Tab as HUITab } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import { TabButton } from "./TabButton";
import { TabList } from "./TabList";

export type TabProps = InferComponentProps<typeof HUITab>;

export const Tab: typeof HUITab & {
	Button: typeof TabButton;
	Group: typeof HUITab.Group;
	List: typeof HUITab.List;
} = ObjectUtils.setStatic(HUITab, {
	Button: TabButton,
	Group: HUITab.Group,
	List: TabList
});
