import { Menu } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";

export type MenuButtonProps = InferComponentProps<typeof MenuButton>;

export const MenuButton: typeof Menu.Button = Menu.Button;

MenuButton.displayName = "MenuButton";
