import { Divider, MainContainer, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetNotificationCountQuery, useGetNotificationsQuery } from "../graphql";
import { LoadingNotificationCard, NotificationCard } from "../organisms";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
`;

const Content = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
	overflow-hidden
`;

const Title = tw.h1`
	flex
	pt-6
	px-6
	text-xl
	font-bold
	leading-none
`;

const Notifications = tw.div`
	flex
	flex-col
	items-stretch
`;

export const Page: NextPage = () => {
	const [{ data: countData }] = useGetNotificationCountQuery({ requestPolicy: "cache-first" });

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetNotificationsQuery, {
		field: "viewer.notifications",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE
		}
	});

	const notifications = data?.viewer?.notifications.nodes ?? [];
	const unopenedCount = countData?.viewer?.notifications.totalCount ?? 0;

	return (
		<Root>
			<Content>
				<Title>
					{unopenedCount
						? `You have ${unopenedCount.toLocaleString()} new notifications`
						: "Notifications"}
				</Title>
				<Notifications tw="mt-6">
					{!notifications.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="You don't have any notifications yet"
									tw="shadow-none"
								/>
						  )
						: notifications.map((notification, i) => (
								<Fragment key={notification.id}>
									{!!i && <Divider />}
									<NotificationCard
										ref={getLoadMoreRef(i)}
										notification={notification}
									/>
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!notifications.length) && <Divider />}
								<LoadingNotificationCard />
							</Fragment>
						))}
				</Notifications>
			</Content>
		</Root>
	);
};

export default Page;
