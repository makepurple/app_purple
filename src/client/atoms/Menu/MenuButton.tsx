import { InferComponentProps } from "@/client/types";
import { Menu as HUIMenu } from "@headlessui/react";

export type MenuButtonProps = InferComponentProps<typeof MenuButton>;

export const MenuButton = HUIMenu.Button;

MenuButton.displayName = "MenuButton";
