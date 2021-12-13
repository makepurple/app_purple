import { settings } from "nexus-prisma/generator";

/**
 * !HACK
 * @description
 * nexus-prisma doesn't support placing generator settings in custom schema.prisma
 * location specified by package.json.
 *
 * So placing this file here instead.
 * @author David Lee
 * @date June 27, 2021
 */
settings({
	projectIdIntToGraphQL: "Int"
});
