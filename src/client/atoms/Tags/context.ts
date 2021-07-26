import { createContext, SyntheticEvent } from "react";

export interface TagsContextProps {
	editable: boolean;
	onRemove?: (tag: string, event?: SyntheticEvent) => void;
}

export const TagsContext = createContext<TagsContextProps>({
	editable: false
});
