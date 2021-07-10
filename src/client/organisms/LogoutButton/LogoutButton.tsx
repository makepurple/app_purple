import { Button } from "@/client/atoms";
import { signOut } from "next-auth/client";
import React, { CSSProperties, FC } from "react";

export interface LogoutButtonProps {
	className?: string;
	label?: string;
	style?: CSSProperties;
}

export const LogoutButton: FC<LogoutButtonProps> = ({ className, label = "Logout", style }) => {
	return (
		<Button className={className} onClick={() => signOut()} style={style} type="button">
			<span>{label}</span>
		</Button>
	);
};
