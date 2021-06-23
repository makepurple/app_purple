import { FileUpload } from "@apollographql/graphql-upload-8-fork";
import { GraphQLUpload } from "apollo-server-micro";
import { createWriteStream } from "fs";
import { JSONObjectResolver } from "graphql-scalars";
import { scalarType } from "nexus";
import path from "path";
import stream from "stream";
import { promisify } from "util";

export const JSONObject = scalarType({
	name: "JSONObject",
	description: JSONObjectResolver.description,
	serialize: JSONObjectResolver.serialize,
	parseValue: JSONObjectResolver.parseValue,
	parseLiteral: JSONObjectResolver.parseLiteral
});

export const Upload = scalarType({
	name: "Upload",
	asNexusMethod: "upload",
	description: GraphQLUpload?.description,
	serialize: GraphQLUpload?.serialize,
	parseValue: async (value: Promise<any>): Promise<string> => {
		// We want to support URLs as well
		if (typeof value === "string") {
			return value;
		}

		const file: FileUpload = await GraphQLUpload?.parseValue(value);
		const filePath = path.join(__dirname, file.filename);

		await promisify(stream.pipeline)(
			file.createReadStream(),
			createWriteStream(path.join(__dirname, file.filename))
		);

		return filePath;
	},
	parseLiteral: GraphQLUpload?.parseLiteral
});
