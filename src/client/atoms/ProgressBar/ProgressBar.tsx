import styled from "styled-components";

export const ProgressBar = styled.div`
	display: flex;
	align-items: stretch;
	height: 0.75rem;
	border-radius: 9999px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.palette.mediumGrey};
`;
