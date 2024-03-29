import { ErrorBoundary, ErrorBoundaryProps, ErrorBoundaryRef } from "@makepurple/components";
import type { Meta, Story } from "@storybook/react";
import React, { useRef, useState } from "react";

export default {
	title: "atoms/ErrorBoundary",
	component: ErrorBoundary
} as Meta;

const Thrower = () => {
	const [error, setError] = useState<Error | null>(null);

	if (error) {
		setError(null);

		throw error;
	}

	return (
		<button onClick={() => setError(new Error("Storybook Example"))} type="button">
			Throw
		</button>
	);
};

const Template: Story<ErrorBoundaryProps> = (args) => {
	const errorRef = useRef<ErrorBoundaryRef>(null);

	return (
		<ErrorBoundary
			{...args}
			ref={errorRef}
			fallback={() => (
				<button
					onClick={() => {
						errorRef.current?.reset();
					}}
					type="button"
				>
					Reset Error
				</button>
			)}
		>
			{({ error, fallback }) => (error ? <>{fallback}</> : <Thrower />)}
		</ErrorBoundary>
	);
};
Template.args = {};

export const Standard = Template.bind({});
Standard.args = { ...Template.args };
