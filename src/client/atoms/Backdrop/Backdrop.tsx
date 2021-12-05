import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import { AnimatePresence, m } from "framer-motion";
import { forwardRef } from "react";
import tw, { styled } from "twin.macro";

const Root = styled(m.div)`
	${tw`
		fixed
		inset-0
		bg-black
		backdrop-blur-lg
	`}
	z-index: ${getZIndex("backdrop")};
`;

export type BackdropProps = InferComponentProps<"div"> & {
	open?: boolean;
};

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>((props, ref) => {
	const { open, ...divProps } = props;

	return (
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
		</AnimatePresence>
	);
});

Backdrop.displayName = "Backdrop";
