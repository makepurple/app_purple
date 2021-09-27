import { InferComponentProps } from "@/client/types";
import { css, styled } from "twin.macro";

export type MenuItemProps = InferComponentProps<typeof MenuItem>;

export const MenuItem = styled.button<{ selected?: boolean }>`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 0.5rem 0.75rem;
	border: none;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.secondaryText};
	background-color: transparent;
	transition-property: background-color, opacity;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 0.15s;
	cursor: pointer;

	&:hover {
		background-color: rgb(250, 250, 250);
		opacity: 0.8;
	}

	${({ selected }) =>
		selected &&
		css`
			color: ${({ theme }) => theme.colors.contrastingPrimaryText};

			&,
			&:hover {
				background-color: ${({ theme }) => theme.palette.purple};
			}
		`};
`;

MenuItem.defaultProps = {
	type: "button"
};
