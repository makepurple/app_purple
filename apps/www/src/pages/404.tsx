import { NextPage } from "next";
import React from "react";
import { Page as NextError } from "./_error";

export const Page: NextPage = () => {
	return <NextError statusCode={404} />;
};

export default Page;
