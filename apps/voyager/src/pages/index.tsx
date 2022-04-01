import type { VoyagerProps } from "graphql-voyager/typings/components";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import schema from "../graphql/generated/schema.gen.json";

import "graphql-voyager/dist/voyager.css";

const Voyager = dynamic<VoyagerProps>(
	() => import("graphql-voyager").then((mod) => mod.Voyager as any),
	{ ssr: false }
);

export const Page: NextPage = () => {
	return (
		<Voyager
			introspection={() => Promise.resolve({ data: schema })}
			workerURI="/js/voyager.worker.js"
		/>
	);
};

export default Page;
