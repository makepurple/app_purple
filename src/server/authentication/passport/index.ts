import prisma from "@/server/db/prisma";
import { AuthProvider, User as PrismaUser } from "@prisma/client";
import passport from "passport";
import { githubStrategy } from "./github.strategy";

// This types passport.(de)serializeUser!
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Express {
		interface User extends PrismaUser {
			id: string;
		}
	}
}

passport.use(githubStrategy);

passport.serializeUser(async (profile: any, done) => {
	const email: Maybe<string> = profile.emails[0]?.value?.toLowerCase();
	const username: string = profile.username;
	const profileUrl: string = profile.profileUrl;
	const profileImageUrl: string | null = profile.photos[0]?.value ?? null;

	if (!email) {
		throw new Error("Email could not be found.");
	}

	const user = await prisma.user.upsert({
		create: {
			email,
			username,
			profileUrl,
			profileImageUrl,
			provider: AuthProvider.GitHub
		},
		update: {},
		where: {
			email
		}
	});

	done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
	const user = await prisma.user.findUnique({
		where: { id }
	});

	done(null, user);
});

export default passport;
