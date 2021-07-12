import { MainContainer } from "@/client/atoms";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Root = styled(MainContainer)``;

export const Page: NextPage = () => {
	const router = useRouter();

	const { name } = router.query;

	return <Root>{name}</Root>;
};

export default Page;
