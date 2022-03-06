import { useLockBodyScroll } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils, WindowUtils } from "@makepurple/utils";
import { AnimatePresence, m } from "framer-motion";
import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
import tw, { styled } from "twin.macro";

const Root = styled(m.div)`
	${tw`
		fixed
		inset-0
		bg-black
		backdrop-blur-lg
	`}
	z-index: ${StyleUtils.getZIndex("backdrop")};
`;

export type BackdropProps = InferComponentProps<"div"> & {
	open?: boolean;
};

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
	const { open, ...divProps } = props;

	useLockBodyScroll(open);

	if (WindowUtils.isSsr()) return null;

	return createPortal(
		<AnimatePresence initial={false}>
			{open && (
				<Root
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.4 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.15,
						ease: "easeIn"
					}}
					{...(divProps as any)}
					ref={ref}
				/>
			)}
		</AnimatePresence>,
		document.body
	);
});

Backdrop.displayName = "Backdrop";
