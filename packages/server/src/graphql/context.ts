import type { PrismaClient } from "@makepurple/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import type { JWT } from "next-auth/jwt";
import type { RedisService } from "../redis/types";
import type { CloudinaryClient } from "../services/cloudinary";
import type { OctokitClient } from "../services/octokit";

export interface ServerContextUser {
	id: string;
	email: string;
	name: string;
}

export interface ServerContext {
	cloudinary: CloudinaryClient;
	jwt: Maybe<JWT>;
	octokit: ReturnType<OctokitClient["graphql"]>;
	prisma: PrismaClient;
	redis: RedisService;
	req: NextApiRequest;
	res: NextApiResponse;
	user: Maybe<ServerContextUser>;
}
