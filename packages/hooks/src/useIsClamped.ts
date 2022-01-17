import { RefObject, useMemo } from "react";

export const useIsClamped = <T extends HTMLElement>(ref: RefObject<T>): boolean => {
	return useMemo((): boolean => {
		const elem = ref.current;

		if (!elem) return false;

		return elem.scrollHeight > elem.clientHeight;
	}, [ref]);
};
