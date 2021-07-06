import { useGetMyUserQuery } from "@/client/graphql";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

export interface UseLogoutHookParams {
	onSuccess?: () => void;
}

export const useLogout = (params: UseLogoutHookParams = {}) => {
	const { onSuccess } = params;

	const [{ data }, getUser] = useGetMyUserQuery({
		pause: true,
		requestPolicy: "network-only"
	});

	const router = useRouter();

	const logout = useCallback(async (): Promise<void> => {
		await router.push("/api/auth/logout");

		getUser();
	}, [getUser, router]);

	const isLoggedIn: boolean = !!data?.viewer;

	useEffect(
		() => {
			!isLoggedIn && onSuccess?.();
		},
		/* eslint-disable react-hooks/exhaustive-deps */
		[isLoggedIn]
	);

	return logout;
};
