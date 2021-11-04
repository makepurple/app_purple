import { string } from "computed-types";

const reservedWords = [
	"403",
	"404",
	"500",
	"about",
	"account",
	"accounts",
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
	"contact",
	"dashboard",
	"domain",
	"domains",
	"draft",
	"edit",
	"error",
	"errors",
	"experience",
	"faq",
	"favicon",
	"features",
	"feedback",
	"graphql",
	"help",
	"index",
	"home",
	"legal",
	"login",
	"logout",
	"media",
	"new",
	"post",
	"posts",
	"press",
	"pricing",
	"privacy",
	"pro",
	"product",
	"profile",
	"public",
	"register",
	"repositories",
	"robots",
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
	.min(12, "Must be at least 12 characters")
	.test((value) => !reservedWords.includes(value), "Invalid title");
