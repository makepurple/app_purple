import { useWindowFocus } from "@makepurple/hooks";
import ms from "ms";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import {
	useGetMyUserQuery,
	useGetNotificationCountsQuery,
	useUpdateUserFromGitHubMutation
} from "../graphql";

const usePollNotificationCounts = () => {
	const { status } = useSession();
	const focused = useWindowFocus();

	const [{ fetching }, reexecuteQuery] = useGetNotificationCountsQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-first"
	});

	useEffect(() => {
		if (status !== "authenticated") return;
		if (fetching) return;
		if (!focused) return;

		const timerId = setTimeout(() => {
			reexecuteQuery({ requestPolicy: "network-only" });
		}, ms("30s"));

		return () => {
			clearTimeout(timerId);
		};
	}, [fetching, focused, reexecuteQuery, status]);
};

const useRefreshUserGitHubData = () => {
	const { status } = useSession();

	const [, updateUser] = useUpdateUserFromGitHubMutation();

	/**
	 * !HACK
	 * @description We want to keep the user's data as fresh from github as we can. So we're
	 * updating it here globally. Ignore any errors, since it's not critical to functionality
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
};

const useGetUserBanStatus = () => {
	const { status } = useSession();

	const [{ data }] = useGetMyUserQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-first"
	});

	const user = data?.viewer;

	useEffect(() => {
		if (!user?.banned) return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		signOut({ callbackUrl: "/", redirect: true });
	}, [user]);
};

export const useGlobalGraphQL = () => {
	usePollNotificationCounts();
	useRefreshUserGitHubData();
	useGetUserBanStatus();
};
