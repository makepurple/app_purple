import { Button } from "@makepurple/components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, ReactNode, useEffect, useMemo } from "react";
import toast from "react-hot-toast";
import { GetPostDraftQuery, useCreatePostMutation, useGetPostDraftQuery } from "../../graphql";

export interface NewPostButtonRenderProps {
	draft?: GetPostDraftQuery["postDraft"];
}

export interface NewPostButtonProps {
	children?: ReactNode | FC<NewPostButtonRenderProps>;
	className?: string;
	style?: CSSProperties;
	userName: string;
}

export const NewPostButton: FC<NewPostButtonProps> = ({
	children: Children = "New Post",
	className,
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

	useEffect(() => {
		if (process.env.NODE_ENV === "test") return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		router?.prefetch("/[userName]/draft", `/${userName}/draft`);
	}, [router, userName]);

	if (status !== "authenticated") return null;

	return (
		<Button
			className={className}
			disabled={creatingPost}
			onClick={async () => {
				if (draft) {
					await router.push("/[userName]/draft", `/${userName}/draft`);

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
			style={style}
			type="button"
		>
			{child}
		</Button>
	);
};
