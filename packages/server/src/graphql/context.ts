import type { PrismaClient, UserRole } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import type { JWT } from "next-auth/jwt";
import type { GraphCDNClient } from "services/graphcdn";
import type { CloudinaryClient } from "../services/cloudinary";
import type { OctokitClient } from "../services/octokit";
import type { PusherClient } from "../services/pusher";

export interface ServerContextUser {
	id: string;
	email: string;
	name: string;
	role: UserRole;
}

export interface ServerContext {
	cloudinary: CloudinaryClient;
	graphcdn: GraphCDNClient;
	ip: Maybe<string>;
	jwt: Maybe<JWT>;
	octokit: Awaited<ReturnType<OctokitClient["graphql"]>>;
	prisma: PrismaClient;
	pusher: PusherClient;
	req: NextApiRequest;
	res: NextApiResponse;
	user: Maybe<ServerContextUser>;
}
