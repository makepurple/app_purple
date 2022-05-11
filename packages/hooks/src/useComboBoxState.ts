import { FunctionUtils, ObjectUtils } from "@makepurple/utils";
import { useIsMounted } from "@react-hookz/web";
import {
	useCombobox,
	UseComboboxProps,
	UseComboboxReturnValue,
	UseComboboxStateChange
} from "downshift";
import { useCallback, useMemo, useState } from "react";

export type { UseComboboxStateChange } from "downshift";

export type UseComboBoxProps<T> = UseComboboxProps<T> & {
	debounce?: number;
};

export type UseComboBoxState<T> = UseComboboxReturnValue<T> & { loading: boolean };

export const useComboBoxState = ObjectUtils.setStatic(
	<T>(props: UseComboBoxProps<T>): UseComboBoxState<T> => {
		const { debounce = 0, inputValue, onInputValueChange, ...downshiftProps } = props;

		const isMounted = useIsMounted();

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

		const hasInput = !!combobox.inputValue;
		const isPending = hasInput && isReady === false;

		const isOpen = combobox.isOpen && hasInput;
		const hasItems = !!props.items.length;

		return {
			...combobox,
			isOpen: (isOpen && hasItems) || loading || isPending,
			loading: hasInput && (loading || isPending)
		};
	},
	{
		stateChangeTypes: useCombobox.stateChangeTypes
	}
);
