import { RefObject, useCallback, useEffect, useState } from "react";
import { useOnClickOutside, useOnKeyDown } from ".";

export const useContextMenu = <TElement extends HTMLElement>(ref: RefObject<TElement>) => {
	const [position, setPosition] = useState<Maybe<{ x: number; y: number }>>();

	const onContextMenu = useCallback((event: MouseEvent) => {
		event.preventDefault();

		setPosition({
			x: event.pageX,
			y: event.pageY
		});
	}, []);

	useOnClickOutside(ref, () => {
		setPosition(null);
	});

	useOnKeyDown(
		{
			global: true,
			key: "KEY_ESCAPE"
		},
		() => {
			setPosition(null);
		}
	);

	useEffect(() => {
		const elem = ref.current;

		if (!elem) return;

		elem.addEventListener("contextmenu", onContextMenu);
	}, [onContextMenu, ref]);

	return { contextMenuProps: { position } };
};
