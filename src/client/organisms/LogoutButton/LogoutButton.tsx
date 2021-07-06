import { Button } from "@/client/atoms";
import { useLogout } from "@/client/hooks";
import React, { CSSProperties, FC } from "react";

export interface LogoutButtonProps {
	className?: string;
	label?: string;
	style?: CSSProperties;
}

export const LogoutButton: FC<LogoutButtonProps> = ({ className, label = "Logout", style }) => {
	const logout = useLogout();

	return (
		<Button className={className} onClick={logout} style={style} type="button">
			<span>{label}</span>
		</Button>
	);
};
