import { Menu, MenuProps } from "@/client/atoms";
import { ObjectUtils, WindowUtils } from "@/utils";
import { AnimatePresence, m } from "framer-motion";
import React, { FC } from "react";
import { createPortal } from "react-dom";
import tw from "twin.macro";

const Root = tw(m(Menu))`
	fixed
`;

export interface ContextMenuProps extends MenuProps {
	position?: Maybe<{ x: number; y: number }>;
}

const _ContextMenu: FC<ContextMenuProps> = ({ position, style, ...restMenuProps }) => {
	if (!WindowUtils.isBrowser()) return null;

	return createPortal(
		<AnimatePresence initial={false}>
			{!!position && (
				<Root
					{...(restMenuProps as any)}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{
						...style,
						top: position.y,
						left: position.x
					}}
					transition={{ duration: 0.15 }}
				/>
			)}
		</AnimatePresence>,
		document.body
	);
};

export const ContextMenu = ObjectUtils.setStatic(_ContextMenu, {
	Item: Menu.Item
});
