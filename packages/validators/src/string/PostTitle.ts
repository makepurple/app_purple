import { string } from "computed-types";

const reservedWords = [
	"403",
	"404",
	"500",
	"about",
	"account",
	"accounts",
	"activity",
	"admin",
	"analytics",
	"api",
	"app",
	"assets",
	"auth",
	"beta",
	"billing",
	"blog",
	"business",
	"careers",
	"categories",
	"category",
	"chat",
	"connections",
	"contact",
	"dashboard",
	"domain",
	"domains",
	"draft",
	"edit",
	"error",
	"errors",
	"experiences",
	"faq",
	"favicon",
	"features",
	"feedback",
	"followers",
	"following",
	"friends",
	"graphql",
	"help",
	"index",
	"home",
	"legal",
	"login",
	"logout",
	"media",
	"new",
	"overview",
	"post",
	"posts",
	"press",
	"pricing",
	"privacy",
	"pro",
	"product",
	"profile",
	"public",
	"r",
	"register",
	"repo",
	"repos",
	"repository",
	"repositories",
	"robots",
	"s",
	"search",
	"settings",
	"skill",
	"skills",
	"signin",
	"signup",
	"sitemaps",
	"static",
	"status",
	"store",
	"terms",
	"upgrade",
	"user",
	"users",
	"webhooks"
];

export const PostTitle = string
	.trim()
	.min(12, "Must be at least 12 characters")
	.max(100, "100 character limit")
	.test((value) => !reservedWords.includes(value), "Invalid title");
