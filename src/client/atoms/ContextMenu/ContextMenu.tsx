import { WindowUtils } from "@/utils";
import { AnimatePresence, m } from "framer-motion";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { createPortal } from "react-dom";
import tw from "twin.macro";

const Root = tw(m.div)`
	fixed
	flex
	flex-col
	items-stretch
	py-3
	px-2
	rounded-lg
	bg-white
	shadow-2xl
`;

export interface ContextMenuProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	position?: Maybe<{ x: number; y: number }>;
}

export const ContextMenu: FC<ContextMenuProps> = ({ position, style, ...restMenuProps }) => {
	if (WindowUtils.isSsr()) return null;

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
