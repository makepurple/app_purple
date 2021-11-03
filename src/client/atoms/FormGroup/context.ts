import { createContext } from "react";

export interface FormGroupContextValue {
	error: boolean;
}

export const FormGroupContext = createContext<FormGroupContextValue>({
	error: false
});
