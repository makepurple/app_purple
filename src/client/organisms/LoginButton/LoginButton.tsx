import { Button } from "@/client/atoms";
import { useLogin } from "@/client/hooks";
import { GitHubIcon } from "@/client/svgs";
import React, { CSSProperties, FC } from "react";
import styled from "styled-components";

const StyledGitHubIcon = styled(GitHubIcon)`
	margin-right: 8px;
`;

export interface LoginButtonProps {
	className?: string;
	style?: CSSProperties;
}

export const LoginButton: FC<LoginButtonProps> = ({ className, style }) => {
	const login = useLogin();

	return (
		<Button className={className} onClick={login} style={style} type="button">
			<StyledGitHubIcon height={20} width={20} />
			<span>Login</span>
		</Button>
	);
};
