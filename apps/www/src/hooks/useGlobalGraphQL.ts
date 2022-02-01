import ms from "ms";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useGetNotificationCountsQuery } from "../graphql";

export const useGlobalGraphQL = () => {
	const { status } = useSession();

	const [{ fetching }, getCounts] = useGetNotificationCountsQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-and-network"
	});

	useEffect(() => {
		if (status !== "authenticated") return;
		if (fetching) return;

		const timerId = setTimeout(() => {
			getCounts({ requestPolicy: "network-only" });
		}, ms("20s"));

		return () => {
			clearTimeout(timerId);
		};
	}, [fetching, getCounts, status]);
};
