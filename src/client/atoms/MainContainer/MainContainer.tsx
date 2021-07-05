import { InferComponentProps } from "@/client/types";
import styled from "styled-components";

export type MainContainerProps = InferComponentProps<typeof MainContainer>;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1000 1 0;
	box-sizing: border-box;
	max-width: 1000px;
	margin: 0 auto;
`;
