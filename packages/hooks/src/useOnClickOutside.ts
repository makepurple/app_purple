import { MouseEvent, RefObject, SyntheticEvent, TouchEvent, useCallback, useEffect } from "react";

export const didClickIn = <T extends HTMLElement>(
	elem: Maybe<T>,
	e: SyntheticEvent<HTMLElement>
): boolean => {
	return !elem || elem.contains(e.target as Node | null);
};

export const useOnClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: (event: SyntheticEvent<HTMLElement>) => void
) => {
	const listener = useCallback(
		(event: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => {
			if (didClickIn(ref.current, event)) return;

			handler(event);
		},
		[handler, ref]
	);

	useEffect(() => {
		document.addEventListener("mousedown", listener as any);
		document.addEventListener("touchstart", listener as any);

		return () => {
			document.removeEventListener("mousedown", listener as any);
			document.removeEventListener("touchstart", listener as any);
		};
	}, [listener]);
};
