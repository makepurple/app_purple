import { createHtmlEmail } from "@/server/emails";
import * as _templates from "@/server/emails/templates";
import { stripIndent } from "common-tags";
import fs from "fs-extra";
import path from "path";
import prettier from "prettier";
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
	const { output, templates } = options;

	console.log("Generating email stories");
	
	const emailHtmlDict = Object.keys(templates).reduce<Record<string, string>>((acc, key) => {
		const template = templates[key];
		const html = createHtmlEmail(template, {}, { minify: false });

		return { ...acc, [key]: html };
	}, {});

	console.log("Emails created, ensuring empty output directory");
	
	fs.ensureDirSync(output);
	fs.emptyDirSync(output);

	console.log("Writing to output...");

	const emailKeys: readonly string[] = Object.keys(emailHtmlDict);

	emailKeys.forEach((key, i) => {
		console.log(`Writing email ${i + 1} / ${emailKeys.length}: ${key}`);

		const outputPath: string = path.join(output, `${key}.stories.tsx`);
		const emailHtml: string = emailHtmlDict[key];
		const storyCode: string = toStory(key, emailHtml);
		const prettied: string = prettier.format(storyCode, {
			parser: "babel-ts",
			semi: true,
			tabWidth: 4,
			useTabs: true
		});

		fs.ensureFileSync(outputPath);
		fs.writeFileSync(outputPath, prettied, {
			encoding: "utf8",
			flag: "w"
		});
	});

	process.exit(0);
};

const dirname: string = process.env.PROJECT_DIRNAME
	? path.join(process.env.PROJECT_DIRNAME)
	: __dirname;

const templatePath: string = path.resolve(dirname, "../src/server/emails/generated");

generateTemplates({
	output: templatePath,
	templates: _templates
});
