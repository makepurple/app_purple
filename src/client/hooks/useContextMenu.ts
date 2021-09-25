import { RefObject, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useOnClickOutside, useOnKeyDown } from ".";

export interface UseContextMenuOptions {
	onClose?: (event: SyntheticEvent) => void;
}

export const useContextMenu = <TElement extends HTMLElement>(
	ref: RefObject<TElement>,
	options: UseContextMenuOptions = {}
) => {
	const { onClose } = options;

	const [position, setPosition] = useState<Maybe<{ x: number; y: number }>>();

	const onContextMenu = useCallback((event: MouseEvent) => {
		event.preventDefault();

		setPosition({
			x: event.pageX,
			y: event.pageY
		});
	}, []);

	useOnClickOutside(ref, (event) => {
		setPosition(null);
		onClose?.(event);
	});

	useOnKeyDown(
		{
			global: true,
			key: "CODE_ESCAPE"
		},
		(event) => {
			setPosition(null);
			onClose?.(event);
		}
	);

	useEffect(() => {
		const elem = ref.current;

		if (!elem) return;

		elem.addEventListener("contextmenu", onContextMenu);
	}, [onContextMenu, ref]);

	return {
		contextMenuProps: { position },
		isOpen: !!position
	};
};
