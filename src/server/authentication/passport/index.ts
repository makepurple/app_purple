import prisma from "@/server/db/prisma";
import { createHtmlEmail, sendEmail, WelcomeEmail } from "@/server/emails";
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
	/* eslint-disable @typescript-eslint/no-unsafe-call */
	/* eslint-disable @typescript-eslint/no-unsafe-assignment */
	const email: Maybe<string> = profile.emails[0]?.value?.toLowerCase();
	const username: string = profile.username;
	const profileGitHubUrl: string = profile.profileUrl;
	const profileImageUrl: string | null = profile.photos[0]?.value ?? null;
	/* eslint-enable @typescript-eslint/no-unsafe-call */
	/* eslint-enable @typescript-eslint/no-unsafe-assignment */

	if (!email) {
		throw new Error("Email could not be found.");
	}

	const existingUser = await prisma.user.findUnique({ where: { email } });

	if (existingUser) {
		done(null, existingUser.id);

		return;
	}

	const user = await prisma.user.create({
		data: {
			email,
			username,
			profileGitHubUrl,
			profileImageUrl,
			provider: AuthProvider.GitHub
		}
	});

	await sendEmail({
		To: email,
		HtmlBody: createHtmlEmail(WelcomeEmail, { username: user.username }),
		Subject: "Welcome to MakePurple!"
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
