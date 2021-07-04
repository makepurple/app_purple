import { InferComponentProps } from "@/client/types";
import styled from "styled-components";

export type AppBarProps = InferComponentProps<typeof AppBar>;

export const AppBar = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 64px;
	background-color: ${({ theme }) => theme.colors.surfaceColor};
	z-index: ${({ theme }) => theme.zIndicies.getZIndex("app-bar")};
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
`;
