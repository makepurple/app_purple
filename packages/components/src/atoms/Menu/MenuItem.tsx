import { Menu } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";

export type MenuItemProps = InferComponentProps<typeof MenuItem>;

export const MenuItem: typeof Menu.Item = Menu.Item;
