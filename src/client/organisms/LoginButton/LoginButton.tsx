import { Button } from "@/client/atoms";
import { GitHubIcon } from "@/client/svgs";
import { signIn } from "next-auth/client";
import React, { ComponentType, CSSProperties, FC, SVGAttributes } from "react";
import { styled } from "twin.macro";

const Label = styled.span`
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
	return (
		<Button className={className} onClick={() => signIn("github")} style={style} type="button">
			{Icon && <Icon height={20} width={20} />}
			<Label>{label}</Label>
		</Button>
	);
};
