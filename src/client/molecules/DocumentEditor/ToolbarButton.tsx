import { styled } from "twin.macro";

export const ToolbarButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	min-width: 48px;
	padding: 0 0.875rem;
	border: none;
	box-shadow: ${({ theme }) => theme.shadows.xs};
	font-size: inherit;
	color: ${({ theme }) => theme.colors.primaryText};
	background-color: transparent;
	cursor: pointer;
	transition: box-shadow 0.2s ease-in-out;

	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.md};
	}
`;

ToolbarButton.defaultProps = {
	type: "button"
};
