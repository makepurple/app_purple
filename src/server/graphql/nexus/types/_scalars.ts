import { GraphQLUpload } from "apollo-server-micro";
import { URLResolver } from "graphql-scalars";
import { scalarType } from "nexus";
import NexusPrismaScalars from "nexus-prisma/scalars";

export const scalarTypes = [
	NexusPrismaScalars,
	scalarType({
		sourceType: "Promise<FileUpload>",
		name: "Upload",
		asNexusMethod: "upload",
		description: GraphQLUpload?.description,
		serialize: GraphQLUpload?.serialize,
		parseValue: GraphQLUpload?.parseValue,
		parseLiteral: GraphQLUpload?.parseLiteral
	}),
	scalarType({
		name: URLResolver.name,
		asNexusMethod: "url",
		description: URLResolver.description,
		serialize: URLResolver.serialize,
		parseValue: URLResolver.parseValue,
		parseLiteral: URLResolver.parseLiteral
	})
];
