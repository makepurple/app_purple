import { createContext, RefCallback, SyntheticEvent } from "react";
import type { TagProps } from ".";

export interface TagsContextProps {
	editable: boolean;
	editableRef: RefCallback<HTMLInputElement>;
	onRemove?: (tag: TagProps, event?: SyntheticEvent) => void;
}

export const TagsContext = createContext<TagsContextProps>({
	editable: false,
	editableRef: () => undefined
});
