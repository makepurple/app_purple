import { Button } from "@makepurple/components";
import { UrlUtils } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, ReactNode, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { GetPostDraftQuery, useCreatePostMutation, useGetPostDraftQuery } from "../../graphql";

export interface NewPostButtonRenderProps {
	draft?: GetPostDraftQuery["postDraft"];
}

export interface NewPostButtonProps {
	bounce?: boolean;
	children?: ReactNode | FC<NewPostButtonRenderProps>;
	className?: string;
	skillName?: string;
	skillOwner?: string;
	style?: CSSProperties;
	userName: string;
}

export const NewPostButton: FC<NewPostButtonProps> = ({
	bounce,
	children: Children = "New Post",
	className,
	skillName,
	skillOwner,
	style,
	userName
}) => {
	const router = useRouter();

	const { status } = useSession();

	const [{ data }] = useGetPostDraftQuery({
		requestPolicy: "cache-first"
	});

	const [{ fetching: creatingPost }, createPost] = useCreatePostMutation();

	const draft = data?.postDraft;

	const child = useMemo(
		() => (typeof Children === "function" ? <Children draft={draft} /> : Children),
		[Children, draft]
	);

	const draftUrl = useMemo(() => {
		return UrlUtils.appendQuery(`/${userName}/draft`, {
			skillName,
			skillOwner
		});
	}, [skillName, skillOwner, userName]);

	useEffect(() => {
		if (process.env.NODE_ENV === "test") return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		router?.prefetch("/[userName]/draft", draftUrl);
	}, [draftUrl, router]);

	if (status !== "authenticated") return null;

	return (
		<Button
			className={className}
			bounce={bounce}
			disabled={creatingPost}
			onClick={async () => {
				if (draft) {
					await router.push("/[userName]/draft", draftUrl);

					return;
				}

				const didSucceed = await createPost()
					.then((result) => !!result.data?.createPost.record)
					.catch(() => {
						/**
						 * TODO
						 * @description Handle other errors more gracefully from the api
						 * @author David Lee
						 * @date November 5, 2021
						 */
						toast.error("Post could not be created");

						return false;
					});

				if (!didSucceed) return;

				await router.push("/[userName]/draft", `/${userName}/draft`);
			}}
			onMouseOver={async () => {
				await router?.prefetch("/[userName]/draft", draftUrl);
			}}
			style={style}
			type="button"
		>
			{child}
		</Button>
	);
};
