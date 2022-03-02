import { FunctionUtils, ObjectUtils } from "@makepurple/utils";
import {
	useCombobox,
	UseComboboxProps,
	UseComboboxReturnValue,
	UseComboboxStateChange
} from "downshift";
import { useCallback, useMemo, useState } from "react";
import { useMountedState, usePreviousDistinct } from "react-use";

export type UseComboBoxProps<T> = UseComboboxProps<T> & {
	debounce?: number;
};

export type UseComboBoxState<T> = UseComboboxReturnValue<T> & { loading: boolean };

export const useComboBoxState = ObjectUtils.setStatic(
	<T>(props: UseComboBoxProps<T>): UseComboBoxState<T> => {
		const { debounce = 0, inputValue, onInputValueChange, ...downshiftProps } = props;

		const isMounted = useMountedState();

		const [loading, setLoading] = useState<boolean>(false);
		const [isReady, setIsReady] = useState<boolean>(false);

		const debouncedValueChange = useMemo(
			() =>
				FunctionUtils.debounce(
					async (changes: UseComboboxStateChange<T> | null) => {
						setIsReady(true);

						if (!changes) return;

						setLoading(true);

						await Promise.resolve(onInputValueChange?.(changes));

						isMounted() && setLoading(false);
					},
					{ wait: debounce }
				),
			[debounce, isMounted, onInputValueChange]
		);

		const combobox = useCombobox({
			id: "autocomplete",
			...downshiftProps,
			onInputValueChange: useCallback(
				async (newChanges) => {
					setIsReady(false);

					await debouncedValueChange(newChanges);
				},
				[debouncedValueChange]
			)
		});

		const isPending = !!combobox.inputValue && isReady === false;

		const isOpen = combobox.isOpen && !!combobox.inputValue;
		const hasItems = !!props.items.length;

		/**
		 * !HACK
		 * @description Require that the input actually did change (not just default value)
		 * in order for isOpen and loading to be true
		 * @author David Lee
		 * @date March 2, 2022
		 */
		const previous = usePreviousDistinct(combobox.inputValue);

		return {
			...combobox,
			isOpen: (!!previous && isOpen && hasItems) || loading || isPending,
			loading: !!previous && (loading || isPending)
		};
	},
	{
		stateChangeTypes: useCombobox.stateChangeTypes
	}
);
