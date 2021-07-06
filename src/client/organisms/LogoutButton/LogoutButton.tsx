import { Button, Typography } from "@/client/atoms";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";

export interface LogoutButtonProps {
	className?: string;
	label?: string;
	style?: CSSProperties;
}

export const LogoutButton: FC<LogoutButtonProps> = ({ className, label = "Logout", style }) => {
	return (
		<NextLink href="/api/auth/logout" passHref>
			<Button as="a" className={className} style={style} type="button">
				<Typography>{label}</Typography>
			</Button>
		</NextLink>
	);
};
