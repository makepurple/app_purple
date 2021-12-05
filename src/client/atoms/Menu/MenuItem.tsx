import { InferComponentProps } from "@/client/types";
import { Menu as HUIMenu } from "@headlessui/react";

export type MenuItemProps = InferComponentProps<typeof MenuItem>;

export const MenuItem = HUIMenu.Item;
