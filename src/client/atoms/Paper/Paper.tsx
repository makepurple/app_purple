import { styled } from "twin.macro";

export const Paper = styled.div`
	border-radius: 0.5rem;
	box-shadow: ${({ theme }) => theme.shadows.lg};
	background-color: ${({ theme }) => theme.palette.white};
`;
