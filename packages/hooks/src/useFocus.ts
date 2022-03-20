import { useCallback, useEffect, useMemo, useState } from "react";

export const useFocus = <T extends Element = Element>(elem: Maybe<T> = null) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [_elem, ref] = useState<Maybe<T>>(elem);

	const finalElem: Maybe<T> = elem ?? _elem;

	const onFocus = useCallback(() => setIsFocused(true), []);
	const onBlur = useCallback(() => setIsFocused(false), []);

	useEffect(() => {
		if (!finalElem) {
			return;
		}

		finalElem.addEventListener("focus", onFocus);
		finalElem.addEventListener("blur", onBlur);

		return () => {
			finalElem.removeEventListener("focus", onFocus);
			finalElem.removeEventListener("blur", onBlur);
		};
	}, [finalElem, onBlur, onFocus]);

	const hoverResults = useMemo(
		() => ({
			ref,
			handlers: { onBlur, onFocus }
		}),
		[onBlur, onFocus, ref]
	);

	return [isFocused, hoverResults] as [boolean, typeof hoverResults];
};
