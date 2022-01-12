import { ObjectUtils } from "@makepurple/utils";
import {
	useCombobox,
	UseComboboxProps,
	UseComboboxReturnValue,
	UseComboboxStateChange
} from "downshift";
import { useState } from "react";
import { useDebounce, useMountedState } from "react-use";

export type UseComboBoxProps<T> = UseComboboxProps<T> & {
	debounce?: number;
};

export type UseComboBoxState<T> = UseComboboxReturnValue<T> & { loading: boolean };

export const useComboBoxState = ObjectUtils.setStatic(
	<T>(props: UseComboBoxProps<T>): UseComboBoxState<T> => {
		const { debounce = 0, ...downshiftProps } = props;

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
			debounce,
			[changes]
		);

		const combobox = useCombobox({
			id: "autocomplete",
			...downshiftProps,
			onInputValueChange: (newChanges) => {
				setChanges(newChanges);
			}
		});

		const isPending = !!changes && isReady() === false;

		const isOpen = combobox.isOpen;
		const hasItems = !!props.items.length;

		return {
			...combobox,
			isOpen: isOpen || loading || hasItems,
			loading: loading || isPending
		};
	},
	{
		stateChangeTypes: useCombobox.stateChangeTypes
	}
);
