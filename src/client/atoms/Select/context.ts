import { UseSelectReturnValue } from "downshift";
import { createContext } from "react";

export type SelectContextValue = Maybe<
	UseSelectReturnValue<any> & {
		items: any[];
	}
>;

export const SelectContext = createContext<SelectContextValue>(null);
