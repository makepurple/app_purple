import tw, { styled } from "twin.macro";

export const Paper = styled.div`
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.palette.white};
	${tw`shadow-lg`}
`;
