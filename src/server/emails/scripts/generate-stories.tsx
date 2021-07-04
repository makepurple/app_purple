import { createHtmlEmail } from "@/server/emails";
import * as _templates from "@/server/emails/templates";
import { stripIndent } from "common-tags";
import fs from "fs-extra";
import path from "path";
import { ComponentType } from "react";

interface EmailTemplates {
	[key: string]: ComponentType<any>;
}

interface GenerateFromMjmlOptions {
	shouldGenerateArtifacts?: boolean;
	templates: EmailTemplates;
	output: string;
}

const toStory = (key: string, text: string) => {
	return stripIndent`
	import { MjmlMounter } from "@/server/emails/components/MjmlMounter";
	import { ${key} } from "@/server/emails/templates";
	import React from "react";

	const html: string = \`${text}\`;

	export default {
		title: "emails/${key}",
		component: ${key}
	};

	export const Standard = () => <MjmlMounter>{html}</MjmlMounter>;

	Standard.parameters = {
		layout: "fullscreen"
	};
	`;
};

const generateTemplates = (options: GenerateFromMjmlOptions) => {
	const { shouldGenerateArtifacts = true, output, templates } = options;

	if (!shouldGenerateArtifacts) {
		return;
	}

	const emailHtmlDict = Object.keys(templates).reduce<Record<string, string>>((acc, key) => {
		const template = templates[key];
		const html = createHtmlEmail(template, {}, { minify: false });

		return { ...acc, [key]: html };
	}, {});

	fs.ensureDirSync(output);
	fs.emptyDirSync(output);

	Object.keys(emailHtmlDict).forEach((key) => {
		const outputPath: string = path.join(output, `${key}.stories.tsx`);
		const emailHtml: string = emailHtmlDict[key];

		fs.ensureFileSync(outputPath);
		fs.writeFileSync(outputPath, toStory(key, emailHtml), {
			encoding: "utf8",
			flag: "w"
		});
	});
};

const dirname: string = process.env.PROJECT_DIRNAME
	? path.join(process.env.PROJECT_DIRNAME, "src/server/emails")
	: __dirname;

const isProd: boolean = process.env.NODE_ENV === "production";

const templatePath: string = path.resolve(dirname, "../generated");

generateTemplates({
	shouldGenerateArtifacts: !isProd,
	output: templatePath,
	templates: _templates
});
