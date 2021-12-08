import { Button } from "@/client/atoms";
import { useCreatePostMutation, useGetPostDraftQuery } from "@/client/graphql";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";

export interface NewPostButtonProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	userName: string;
}

export const NewPostButton: FC<NewPostButtonProps> = ({
	children = "New Post",
	className,
	style,
	userName
}) => {
	const router = useRouter();

	const [{ data }] = useGetPostDraftQuery({
		requestPolicy: "cache-first"
	});

	const [{ fetching: creatingPost }, createPost] = useCreatePostMutation();

	const draft = data?.postDraft;

	useEffect(() => {
		if (process.env.NODE_ENV === "test") return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		router?.prefetch(`/${userName}/draft`);
	}, [router, userName]);

	return (
		<Button
			className={className}
			disabled={!!draft && !creatingPost}
			onClick={async () => {
				const didSucceed = await createPost()
					.then((result) => !!result.data?.post)
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

				await router.push(`/${userName}/draft`);
			}}
			style={style}
			type="button"
		>
			{children}
		</Button>
	);
};
