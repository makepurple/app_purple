import { UrlUtils } from "@/utils";
import ms from "ms";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
	background-color: #efefef;
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<button
				onClick={() => {
					const queryParams = UrlUtils.toQuery({
						client_id: process.env.GITHUB_CLIENT_ID ?? ""
					});

					const win = window.open(
						`/api/auth/github?${queryParams}`,
						"github-oauth-authorize",
						UrlUtils.toQuery({ height: 600, width: 400 }, ",")
					);

					const intId = setInterval(() => {
						if (win?.location.pathname === "/auth/success") {
							clearInterval(intId);
						}
					}, ms("0.5s"));
				}}
				type="button"
			>
				Click
			</button>
		</Root>
	);
};

export default Page;
