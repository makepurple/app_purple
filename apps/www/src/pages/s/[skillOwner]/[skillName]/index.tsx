import { pageProps } from "../../../../page-props/s/[skillOwner]/[skillName]/posts/[[...slug]]";
import { Page as PostsPage } from "./posts/[[...slug]]";

export const getServerSideProps = pageProps;

export const Page = PostsPage;

export default Page;
