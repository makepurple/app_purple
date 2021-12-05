import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import { Dialog as HUIDialog } from "@headlessui/react";
import { AnimatePresence, m } from "framer-motion";
import { ReactElement } from "react";
import tw, { styled } from "twin.macro";

export type SideDrawerProps = InferComponentProps<typeof HUIDialog> & {
	open?: boolean;
};

const Root = styled(m.div)`
	${tw`
		fixed
		inset-y-0
		left-0
		w-72
		bg-blueGray-50
		shadow-2xl
	`}
	z-index: ${getZIndex("page-drawer")};
`;

/* eslint-disable react/display-name */
export const SideDrawer = (props: SideDrawerProps): ReactElement | null => {
	const { open, ...divProps } = props;

	return (
		<AnimatePresence initial={false}>
			{open && (
				<HUIDialog
					as={Root}
					initial={{ x: "-100%" }}
					animate={{ x: "0%" }}
					exit={{ x: "-100%" }}
					transition={{
						duration: 0.15,
						ease: "easeInOut"
					}}
					open={open}
					static
					{...(divProps as any)}
				/>
			)}
		</AnimatePresence>
	);
};

SideDrawer.displayName = "SideDrawer";
