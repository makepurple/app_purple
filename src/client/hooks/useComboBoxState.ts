import {
	useCombobox,
	UseComboboxProps,
	UseComboboxReturnValue,
	UseComboboxStateChange
} from "downshift";
import ms from "ms";
import { useState } from "react";
import { useDebounce, useMountedState } from "react-use";

export type UseComboBoxState<T> = {
	combobox: UseComboboxReturnValue<T> & { loading: boolean };
};

export const useComboBoxState = <T>(props: UseComboboxProps<T>): UseComboBoxState<T> => {
	const isMounted = useMountedState();

	const [changes, setChanges] = useState<UseComboboxStateChange<T> | null>(null);

	const [loading, setLoading] = useState<boolean>(false);
	const [isReady] = useDebounce(
		async () => {
			if (!changes) return;

			setLoading(true);

			await Promise.resolve(props.onInputValueChange?.(changes));

			isMounted() && setLoading(false);
		},
		ms("0.2s"),
		[changes]
	);

	const combobox = useCombobox({
		...props,
		onInputValueChange: (newChanges) => {
			setChanges(newChanges);
		}
	});

	const isPending = !!changes && isReady() === false;

	return { combobox: { ...combobox, loading: loading || isPending } };
};
