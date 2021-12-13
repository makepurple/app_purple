import React, { ComponentType, FC } from "react";

export const withCssClass = <P extends { cssClass?: string }>(Component: ComponentType<P>) => {
	const wrappedComponent: FC<Omit<P, "cssClass"> & { className?: string }> = (props) => {
		const { className, ...restProps } = props;

		return <Component cssClass={className} {...(restProps as any)} />;
	};

	wrappedComponent.displayName = Component.displayName;

	return wrappedComponent;
};
