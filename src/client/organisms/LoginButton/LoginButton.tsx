import { Button } from "@/client/atoms";
import { GitHubIcon, SvgIconComponent } from "@/client/svgs";
import { signIn } from "next-auth/client";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";

const Label = styled.span`
	&:not(:first-child) {
		${tw`
			ml-2
		`}
	}
`;

const Icon = tw.svg`
	flex-shrink-0
`;

export interface LoginButtonProps {
	className?: string;
	icon?: Maybe<SvgIconComponent>;
	label?: string;
	style?: CSSProperties;
}

export const LoginButton: FC<LoginButtonProps> = ({
	className,
	icon = GitHubIcon,
	label = "Login",
	style
}) => {
	return (
		<Button className={className} onClick={() => signIn("github")} style={style} type="button">
			{icon && <Icon as={icon} height={20} width={20} />}
			<Label>{label}</Label>
		</Button>
	);
};
