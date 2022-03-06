import { Menu, withForwardRef } from "@makepurple/components";
import { PopoverModifiers } from "@makepurple/components/src/atoms/Popover/modifiers";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import React, { CSSProperties, FC, useState } from "react";
import { usePopper } from "react-popper";
import tw from "twin.macro";
import { UserAvatar } from "../UserAvatar";

const SiteWideUserMenuDropdown = dynamic(() => import("./SiteWideUserMenuDropdown"), {
	ssr: false
});

const ForwarededRefMenuDropdown = withForwardRef(SiteWideUserMenuDropdown);

const StyledAvatar = tw(UserAvatar)`
	h-11
	w-11
`;

const OffsetModifier = PopoverModifiers.Offset({ offset: 4 });

export interface SiteWideUserMenuProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideUserMenu: FC<SiteWideUserMenuProps> = ({ className, style }) => {
	const { data: session, status } = useSession();

	const [refElem, ref] = useState<HTMLElement | null>(null);
	const [popperElem, popperRef] = useState<HTMLDivElement | null>(null);

	const { styles, attributes } = usePopper(refElem, popperElem, {
		modifiers: [OffsetModifier],
		placement: "bottom-end",
		strategy: "fixed"
	});

	const user = session?.user;

	if (status !== "authenticated") return null;
	if (!user) return null;

	return (
		<Menu className={className} style={style}>
			{({ open }) => (
				<>
					<Menu.Button
						as={StyledAvatar}
						ref={ref}
						asLink={false}
						border={2}
						height={40}
						width={40}
						tabIndex={0}
						user={{ __typename: "User", ...user }}
					/>
					<ForwarededRefMenuDropdown
						ref={popperRef as any}
						open={open}
						style={styles.popper}
						{...attributes.popper}
					/>
				</>
			)}
		</Menu>
	);
};
