import tw, { styled } from "twin.macro";

export const ToolbarButton = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	min-width: 48px;
	border: none;
	font-size: inherit;
	color: ${({ theme }) => theme.colors.primaryText};
	background-color: transparent;
	cursor: pointer;
	transition: box-shadow 0.2s ease-in-out;
	${tw`shadow-md`}

	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.md};
	}
`;

ToolbarButton.defaultProps = {
	type: "button"
};
