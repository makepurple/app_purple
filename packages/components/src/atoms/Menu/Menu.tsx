import { Menu as HUIMenu } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import tw, { styled } from "twin.macro";
import { MenuButton } from "./MenuButton";
import { MenuItem } from "./MenuItem";
import { MenuItems } from "./MenuItems";

const Root = styled(HUIMenu)`
	${tw`
		relative
		inline-flex
		items-stretch
	`}

	& > * {
		${tw`
			first:flex-grow
		`}
	}
`;

Root.displayName = "Menu";
(Root as any).defaultProps = {
	forwardedAs: "div"
};

export type MenuProps = InferComponentProps<typeof Menu>;

export const Menu = ObjectUtils.setStatic(Root as any, {
	Button: MenuButton,
	Item: MenuItem,
	Items: MenuItems
});
