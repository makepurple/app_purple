import { createContext, SyntheticEvent } from "react";
import type { TagProps } from ".";

export interface TagsContextProps {
	editable: boolean;
	onRemove?: (tag: TagProps, event?: SyntheticEvent) => void;
}

export const TagsContext = createContext<TagsContextProps>({
	editable: false
});
