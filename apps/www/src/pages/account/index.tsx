import {
	AlertDialog,
	Anchor,
	Button,
	FormHelperText,
	MainContainer,
	Spinner,
	toast
} from "@makepurple/components";
import { oneLine } from "common-tags";
import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import React, { useMemo, useState } from "react";
import tw from "twin.macro";
import { useDeleteUserMutation } from "../../graphql";
import { Seo } from "../../organisms";

const DEFAULT_SUBJECT = oneLine`
	HELP: Account deletion failed!
`;

const DEFAULT_BODY = oneLine`
	Help! I'm unable to delete my account! My account is: {{account}}
`;

const Root = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	py-6
`;

const Title = tw.div`
	text-5xl
	font-semibold
	text-rose-600
`;

const Header = tw.div`
	text-2xl
	font-semibold
	text-gray-700
`;

const Description = tw.p`
	max-w-lg
	text-lg
	font-medium
	text-gray-700
	text-opacity-60
	whitespace-pre-line
`;

const AppPermissions = tw.p`
	max-w-lg
	text-lg
	font-medium
	text-gray-700
	text-opacity-60
	whitespace-pre-line
`;

const DeleteButton = tw(Button)`
	max-width[20rem]
	w-full
`;

const ErrorText = tw(FormHelperText)`
	max-width[20rem]
	w-full
`;

export const Page: NextPage = () => {
	const { data: session } = useSession({ required: true });

	const [{ fetching }, deleteUser] = useDeleteUserMutation();

	const [didError, setDidError] = useState<boolean>(false);

	const emailBody = useMemo(
		() => DEFAULT_BODY.replace("{{account}}", session?.user.name ?? ""),
		[session]
	);

	if (!session?.user) return null;

	return (
		<Root>
			<Seo title="Account Settings" />
			<Title>Danger zone</Title>
			<Header tw="mt-6">Delete account</Header>
			<Description tw="mt-3">
				If you delete your account, any and all content you have created on MakePurple will
				be permanently deleted, such as posts, snippets and comments.
			</Description>
			<AppPermissions tw="mt-3">
				Application permissions will need to be separately removed on{" "}
				<Anchor
					href="https://github.com/settings/applications"
					target="_blank"
					rel="noreferrer noopener"
				>
					GitHub
				</Anchor>
				.
			</AppPermissions>
			<AlertDialog
				description={oneLine`
					Are you absolutely sure you want to delete your account?
					This cannot be undone. We will not be able to recover your
					content.
				`}
				onConfirm={async () => {
					const didSucceed = await deleteUser({
						name: session.user.name
					})
						.then((result) => !!result.data?.deleteUser)
						.catch(() => false);

					if (!didSucceed) {
						toast.error("Account could not be deleted");

						setDidError(true);

						return;
					}

					await signOut({ callbackUrl: "/signup" });

					toast.success("Your account was successfully deleted");
				}}
				text="Yes, delete my account"
			>
				<DeleteButton
					disabled={fetching}
					size="large"
					type="button"
					variant="error"
					tw="mt-16"
				>
					{fetching && <Spinner tw="mr-3" />}
					Delete account
				</DeleteButton>
			</AlertDialog>
			{didError && (
				<ErrorText
					error={
						<span>
							We were unable to delete your account. Please contact{" "}
							<Anchor
								href={`mailto:david@makepurple.com?subject=${DEFAULT_SUBJECT}&body=${emailBody}`}
								target="_blank"
								rel="noreferrer noopener nofollow"
							>
								david@makepurple.com
							</Anchor>{" "}
							for assistance.
						</span>
					}
					tw="mt-3"
				/>
			)}
		</Root>
	);
};

export default Page;
