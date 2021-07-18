import NextAuth from "next-auth"

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			/** The user's postal address. */
			id?: number,
			name?: string;
			email?: string | null | undefined;
			image?: string | null | undefined;
			accessToken?: string | null | undefined;
		}
		accessToken: string;
		expires: string;
	}
}
