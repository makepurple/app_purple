import { useCombobox, UseComboboxProps, UseComboboxReturnValue } from "downshift";
import { useState } from "react";
import { useMountedState } from "react-use";

export type UseComboBoxState<T> = {
	combobox: UseComboboxReturnValue<T> & { loading: boolean };
};

export const useComboBoxState = <T>(props: UseComboboxProps<T>): UseComboBoxState<T> => {
	const isMounted = useMountedState();

	const [loading, setLoading] = useState<boolean>(false);

	const combobox = useCombobox({
		...props,
		onInputValueChange: async (changes) => {
			setLoading(true);

			await Promise.resolve(props.onInputValueChange?.(changes));

			isMounted() && setLoading(false);
		}
	});

	return { combobox: { ...combobox, loading } };
};
