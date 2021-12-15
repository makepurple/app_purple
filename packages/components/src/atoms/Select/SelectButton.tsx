import { Listbox } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";

export type SelectButtonProps = InferComponentProps<typeof SelectButton>;

export const SelectButton: typeof Listbox.Button = Listbox.Button;

SelectButton.displayName = "SelectButton";
