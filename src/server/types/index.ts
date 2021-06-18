import { NextApiRequest } from "next";

export interface Request extends NextApiRequest {
	// Passport adds these to the request object
	logout: () => void;
	user?: Express.User;
	protocol?: string;
}
