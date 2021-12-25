/* eslint-disable no-console */
import { transform } from "@svgr/core";
import { stripIndents } from "common-tags";
import fs from "fs-extra";
import glob from "glob";
import path from "path";

const dirname: string = process.env.PROJECT_DIRNAME
	? path.join(process.env.PROJECT_DIRNAME)
	: __dirname;

const sourcePath: string = path.resolve(dirname, "../public/static/svgs");
const componentPath: string = path.resolve(dirname, "../src/svgs");

const generateComponents = () => {
	const filenames = glob.sync(`${sourcePath}/**.svg`);

	console.log("filenames", filenames);

	fs.ensureDirSync(componentPath);
	fs.emptyDirSync(componentPath);

	filenames.forEach((filename, i) => {
		const svg = fs.readFileSync(filename, "utf8");
		const componentName = path.parse(filename).name;
		const componentCode = transform.sync(
			svg,
			{
				template: (variables, { tpl }) => {
					return tpl`
						export const ${variables.componentName} = React.memo(
							React.forwardRef(
								(${variables.props}) => ${variables.jsx}
							)
						);
					`;
				},
				// 1. Clean SVG files using SVGO
				// 2. Generate JSX
				// 3. Format the result using Prettier
				plugins: ["@svgr/plugin-jsx", "@svgr/plugin-prettier"],
				svgoConfig: {
					plugins: [{ removeViewBox: false }]
				},
				memo: true,
				ref: true,
				svgo: true,
				typescript: true
			},
			{ componentName }
		);

		if (i === 0) {
			fs.appendFileSync(
				`${componentPath}/index.tsx`,
				`${stripIndents`
					import type { InferComponentProps } from "@makepurple/typings";
					import * as React from "react";
					import type { Ref, SVGProps } from "react";

					export type SvgIconComponent = typeof ${componentName};
					export type SvgIconComponentProps = InferComponentProps<SvgIconComponent>;
				`}\n\n`
			);
		}

		fs.appendFileSync(`${componentPath}/index.tsx`, `${componentCode}\n`);
	});
};

generateComponents();
