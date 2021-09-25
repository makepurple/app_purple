import svgr from "@svgr/core";
import { stripIndents } from "common-tags";
import fs from "fs-extra";
import glob from "glob";
import path from "path";

const dirname: string = process.env.PROJECT_DIRNAME
	? path.join(process.env.PROJECT_DIRNAME)
	: __dirname;

const sourcePath: string = path.resolve(dirname, "../public/svgs");
const componentPath: string = path.resolve(dirname, "../src/client/svgs");

// Template to generate named exports instaed of default ones
const componentTemplate = (
	{ template },
	opts,
	{ imports, componentName, jsx }
) => {
	return template.smart({ plugins: ['typescript'] }).ast`
		export const ${componentName} = React.memo(
			React.forwardRef(
				(props: React.SVGProps<SVGSVGElement>, svgRef: React.ForwardedRef<SVGSVGElement>) => ${jsx}
			)
		);
	`;
}

const generateComponents = () => {
	const filenames = glob.sync(`${sourcePath}/**.svg`);

	console.log("filenames", filenames);

	fs.ensureDirSync(componentPath);
	fs.emptyDirSync(componentPath);

	fs.appendFileSync(
		`${componentPath}/index.tsx`,
		`${stripIndents`
			import * as React from "react";

			export type SvgIconComponent = typeof GitHubIcon;
		`}\n\n`
	);

	filenames.forEach((filename) => {
		const svg = fs.readFileSync(filename, "utf8");
		const componentName = path.parse(filename).name;
		const componentCode = svgr.sync(
			svg,
			{
				template: componentTemplate,
				// 1. Clean SVG files using SVGO
				// 2. Generate JSX
				// 3. Format the result using Prettier
				plugins: [
					'@svgr/plugin-svgo',
					'@svgr/plugin-jsx',
					'@svgr/plugin-prettier'
				],
				svgoConfig: {
					plugins: [{ removeViewBox: false }]
				},
				memo: true,
				ref: true,
				svgo: true
			},
			{ componentName }
		);

		fs.appendFileSync(
			`${componentPath}/index.tsx`,
			`${componentCode}\n`
		);
	});
};

generateComponents();
