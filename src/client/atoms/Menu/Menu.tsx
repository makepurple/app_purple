import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import tw, { styled } from "twin.macro";
import { MenuItem } from "./MenuItem";

export type MenuProps = InferComponentProps<typeof Menu>;

export const Menu = ObjectUtils.setStatic(
	styled.div`
		display: flex;
		flex-direction: column;
		align-items: stretch;
		box-sizing: border-box;
		padding: 0.75rem 0.5rem;
		border-radius: 0.5rem;
		background-color: ${({ theme }) => theme.colors.surfaceColor};
		${tw`shadow-md`};
	`,
	{ Item: MenuItem }
);

Menu.displayName = "Menu";
