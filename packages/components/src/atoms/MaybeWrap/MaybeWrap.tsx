import React, { FC, ReactNode } from "react";

export interface MaybeWrapRenderProps {
	child?: ReactNode;
}

export interface MaybeWrapProps {
	children: ReactNode;
	condition?: boolean;
	wrap: FC<MaybeWrapRenderProps>;
}

export const MaybeWrap: FC<MaybeWrapProps> = ({ children, condition, wrap }) => {
	return <>{condition ? wrap({ child: children }) : children}</>;
};
