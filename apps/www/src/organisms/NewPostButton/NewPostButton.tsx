import { Button, toast } from "@makepurple/components";
import { UrlUtils } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, MouseEvent, ReactNode, useEffect, useMemo } from "react";
import { GetPostDraftQuery, useCreatePostMutation, useGetPostDraftQuery } from "../../graphql";

export interface NewPostButtonRenderProps {
	draft?: GetPostDraftQuery["postDraft"];
}

export interface NewPostButtonProps {
	bounce?: boolean;
	children?: ReactNode | FC<NewPostButtonRenderProps>;
	className?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
	skillName?: string;
	skillOwner?: string;
	style?: CSSProperties;
}

export const NewPostButton: FC<NewPostButtonProps> = ({
	bounce,
	children: Children = "New Post",
	className,
	onClick,
	skillName,
	skillOwner,
	style
}) => {
	const router = useRouter();
	const { data: session, status } = useSession();

	const userName = session?.user.name;

	const [{ data }] = useGetPostDraftQuery({
		pause: status !== "authenticated",
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

	return (
		<Button
			className={className}
			bounce={bounce}
			disabled={creatingPost}
			onClick={async (e) => {
				onClick?.(e);

				if (status !== "authenticated") {
					await router.push("/signup");

					return;
				}

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
