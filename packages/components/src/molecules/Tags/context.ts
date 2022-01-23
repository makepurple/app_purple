import { createContext, RefCallback, SyntheticEvent } from "react";
import type { TagProps } from "./Tag";

export interface TagsContextProps {
	editable: boolean | "add-only" | "remove-only";
	editableRef: RefCallback<HTMLInputElement>;
	onRemove?: (tag: TagProps, event?: SyntheticEvent) => void;
}

export const TagsContext = createContext<TagsContextProps>({
	editable: false,
	editableRef: () => undefined
});
