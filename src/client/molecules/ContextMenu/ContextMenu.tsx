import { Menu } from "@/client/atoms";
import { ObjectUtils, WindowUtils } from "@/utils";
import { AnimatePresence, m } from "framer-motion";
import React, { CSSProperties, FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Root = styled(m(Menu))`
	position: fixed;
`;

export interface ContextMenuProps {
	children?: ReactNode;
	className?: string;
	position?: Maybe<{ x: number; y: number }>;
	style?: CSSProperties;
}

const _ContextMenu: FC<ContextMenuProps> = ({ children, className, position, style }) => {
	if (!WindowUtils.isBrowser()) return null;

	return createPortal(
		<AnimatePresence initial={false}>
			{!!position && (
				<Root
					className={className}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					style={{
						...style,
						top: position.y,
						left: position.x
					}}
					transition={{ duration: 0.15 }}
				>
					{children}
				</Root>
			)}
		</AnimatePresence>,
		document.body
	);
};

export const ContextMenu = ObjectUtils.setStatic(_ContextMenu, {
	Item: Menu.Item
});
