import { Button } from "@/client/atoms";
import React, { CSSProperties, FC } from "react";

export interface LoginButtonProps {
	className?: string;
	style?: CSSProperties;
}

export const LoginButton: FC<LoginButtonProps> = ({ className, style }) => {
	return (
		<Button className={className} style={style}>
			<span>Login</span>
		</Button>
	);
};
