import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import tw, { styled } from "twin.macro";
import { MenuItem } from "./MenuItem";

export type MenuProps = InferComponentProps<typeof Menu>;

export const Menu = ObjectUtils.setStatic(
	styled.div`
		${tw`
			flex
			flex-col
			items-stretch
			py-3
			px-2
			rounded-lg
			bg-white
			shadow-md
		`}
	`,
	{ Item: MenuItem }
);

Menu.displayName = "Menu";
