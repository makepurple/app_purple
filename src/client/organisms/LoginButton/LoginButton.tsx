import { Button, Typography } from "@/client/atoms";
import { useLogin } from "@/client/hooks";
import { GitHubIcon } from "@/client/svgs";
import React, { ComponentType, CSSProperties, FC, SVGAttributes } from "react";
import styled from "styled-components";

const Label = styled(Typography)`
	&:not(:first-child) {
		margin-left: 8px;
	}
`;

export interface LoginButtonProps {
	className?: string;
	icon?: Maybe<ComponentType<SVGAttributes<SVGSVGElement>>>;
	label?: string;
	style?: CSSProperties;
}

export const LoginButton: FC<LoginButtonProps> = ({
	className,
	icon: Icon = GitHubIcon,
	label = "Login",
	style
}) => {
	const login = useLogin();

	return (
		<Button className={className} onClick={login} style={style} type="button">
			{Icon && <Icon height={20} width={20} />}
			<Label>{label}</Label>
		</Button>
	);
};
