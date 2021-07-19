import { FileUpload } from "@apollographql/graphql-upload-8-fork";
import { GraphQLUpload } from "apollo-server-micro";
import { createWriteStream } from "fs";
import { URLResolver } from "graphql-scalars";
import { scalarType } from "nexus";
import NexusPrismaScalars from "nexus-prisma/scalars";
import path from "path";
import stream from "stream";
import { promisify } from "util";

export const scalarTypes = [
	NexusPrismaScalars,
	scalarType({
		name: "Upload",
		asNexusMethod: "upload",
		description: GraphQLUpload?.description,
		serialize: GraphQLUpload?.serialize,
		parseValue: async (value: Promise<any>): Promise<string> => {
			// We want to support URLs as well
			if (typeof value === "string") {
				return value;
			}

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const file: FileUpload = await GraphQLUpload?.parseValue(value);
			const filePath = path.join(__dirname, file.filename);

			await promisify(stream.pipeline)(
				file.createReadStream(),
				createWriteStream(path.join(__dirname, file.filename))
			);

			return filePath;
		},
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
