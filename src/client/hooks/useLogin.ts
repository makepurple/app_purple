import { useGetMyUserQuery } from "@/client/graphql";
import { UrlUtils, WindowUtils } from "@/utils";
import ms from "ms";
import { useCallback, useEffect } from "react";

export interface UseLoginHookParams {
	onSuccess?: () => void;
}

export const useLogin = (params: UseLoginHookParams = {}) => {
	const { onSuccess } = params;

	const [{ data }, getUser] = useGetMyUserQuery({
		pause: true,
		requestPolicy: "network-only"
	});

	const login = useCallback(async (): Promise<void> => {
		const queryParams = UrlUtils.toQuery({
			client_id: process.env.GITHUB_CLIENT_ID ?? ""
		});

		return new Promise<void>((resolve, reject) => {
			let authWindow: Window | null;

			try {
				authWindow = WindowUtils.openWindow(
					`/api/auth/github?${queryParams}`,
					"github-oauth-authorize",
					{ scrollbars: "yes", status: 1 }
				);
			} catch (error) {
				reject(error);
			}

			const authTimeoutId = setInterval(() => {
				if (authWindow?.location.pathname === "/auth/success") {
					clearInterval(authTimeoutId);
					authWindow.close();

					getUser();
					resolve();
				}
			}, ms("0.5s"));
		});
	}, [getUser]);

	const isLoggedIn = Boolean(data?.viewer);

	useEffect(
		() => {
			isLoggedIn && onSuccess?.();
		},
		/* eslint-disable react-hooks/exhaustive-deps */
		[isLoggedIn]
	);

	return login;
};
