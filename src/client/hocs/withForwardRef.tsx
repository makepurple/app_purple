import React, { ComponentType, forwardRef } from "react";

/**
 * !HACK
 * @description This component is used to forward refs of class components.
 * This is useful for components that cannot be function components, for
 * example, if they need `componentDidCatch` which cannot be implemented in
 * hooks at the time of this comment.
 * @author David Lee
 * @date October 24, 2021
 */
export const withForwardRef = <T extends unknown, P extends unknown>(
	Component: ComponentType<P>
) => {
	const classComponent = (props, ref) => {
		return <Component {...props} innerRef={ref} />;
	};

	classComponent.displayName = `WithForwardedRef(${
		classComponent.displayName || classComponent.name
	})`;

	return forwardRef<T, P>(classComponent);
};
