import { InferComponentProps } from "@/client/types";
import { Listbox as HUIListbox } from "@headlessui/react";

export type SelectButtons = InferComponentProps<typeof SelectButton>;

export const SelectButton = HUIListbox.Button;

SelectButton.displayName = "SelectButton";
