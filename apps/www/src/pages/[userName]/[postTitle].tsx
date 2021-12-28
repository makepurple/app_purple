import { DocumentEditor, Paper } from "@makepurple/components";
import { DocumentEditorValue } from "@makepurple/validators";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw from "twin.macro";
import { useGetPostQuery } from "../../graphql";
import { UserPageLayout } from "../../organisms";
import { pageProps, PageProps } from "../../page-props/[userName]/[postTitle]";

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Editor = tw(DocumentEditor)`
	border-none
	shadow-none
`;

const Editable = tw(DocumentEditor.Editable)`
	p-0
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;
	const postTitle = router?.query.postTitle as string;

	const [{ data }] = useGetPostQuery({
		variables: {
			where: {
				authorName_urlSlug: {
					authorName: userName,
					urlSlug: postTitle
				}
			}
		}
	});

	const post = data?.post;

	const content = useMemo(() => {
		const validator = DocumentEditorValue.destruct();

		const [, resolved] = validator(post?.content as any);

		return resolved;
	}, [post?.content]);

	/**
	 * TODO
	 * @description Handle null case gracefully in the future
	 * @author David Lee
	 * @date December 27, 2021
	 */
	if (!content) return null;

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
			<Content>
				<Editor readOnly value={content}>
					<Editable />
				</Editor>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
