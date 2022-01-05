import { useSession } from "next-auth/react";
import React, { memo, ReactNode, useEffect } from "react";
import { useUpdateUserFromGitHubMutation } from "../../graphql";

export interface AuthDecoratorProviderProps {
	children?: ReactNode;
}

export const AuthDecoratorProvider = memo(({ children }) => {
	const { status } = useSession();

	const [, updateUser] = useUpdateUserFromGitHubMutation();

	/**
	 * !HACK
	 * @description We want to keep the user's data as fresh from github as we can. So we're
	 * updating it here globally.
	 * @author David Lee
	 * @date January 5, 2022
	 */
	useEffect(() => {
		if (status !== "authenticated") return;

		updateUser()
			.then((result) => {
				if (process.env.NODE_ENV === "development") {
					// eslint-disable-next-line no-console
					console.log("updating user info", result);
				}
			})
			.catch((e) => {
				if (process.env.NODE_ENV === "development") {
					// eslint-disable-next-line no-console
					console.log("could not update user info:", e.message);
				}

				return null;
			});
	}, [status, updateUser]);

	return <>{children}</>;
});

AuthDecoratorProvider.displayName = "AuthDecoratorProvider";
