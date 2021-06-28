import { Client } from "postmark";

const postmarkApiToken = process.env.POSTMARK_API_TOKEN ?? "";

export const postmarkClient = new Client(postmarkApiToken);
