import { useCallback, useEffect, useMemo, useState } from "react";

export const useHover = <T extends Element = Element>(elem: Maybe<T> = null) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [_elem, ref] = useState<Maybe<T>>(elem);

	const finalElem: Maybe<T> = elem ?? _elem;

	const onMouseOver = useCallback(() => setIsHovered(true), []);
	const onMouseOut = useCallback(() => setIsHovered(false), []);

	useEffect(() => {
		if (!finalElem) {
			return;
		}

		finalElem.addEventListener("mouseover", onMouseOver);
		finalElem.addEventListener("mouseout", onMouseOut);

		return () => {
			finalElem.removeEventListener("mouseover", onMouseOver);
			finalElem.removeEventListener("mouseout", onMouseOut);
		};
	}, [finalElem, onMouseOut, onMouseOver]);

	const hoverResults = useMemo(
		() => ({
			ref,
			handlers: { onMouseOut, onMouseOver }
		}),
		[onMouseOut, onMouseOver, ref]
	);

	return [isHovered, hoverResults] as [boolean, typeof hoverResults];
};
