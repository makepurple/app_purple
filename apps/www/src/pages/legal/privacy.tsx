import { MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-start
	py-24
`;

const Header = tw.h1`
	self-center
	text-4xl
	md:text-5xl
	md:leading-tight
	font-semibold
	text-gray-700
	text-center
`;

const Content = tw.div`
	flex
	flex-col
	items-start
	gap-4
	pt-24
`;

const Header2 = tw.h2`
	self-center
	mt-12
	text-3xl
	md:text-4xl
	md:leading-tight
	font-semibold
	text-gray-700
	text-center
`;

const Header3 = tw.h3`
	mt-8
	text-2xl
	md:text-3xl
	md:leading-tight
	font-semibold
	text-gray-700
	text-center
`;

const UnorderedList = tw.ul`
	pl-12
	list-disc
	list-outside
`;

const Header4 = tw.h4`
	font-semibold
	text-gray-700
`;

export const Page: NextPage = () => {
	return (
		<Root size="small">
			<Header>Privacy Policy of MakePurple.com</Header>
			<Content>
				<p>Last Updated: March 30, 2022</p>
				<p>
					This Privacy Policy applies to https://makepurple.com (&quot;MakePurple&quot;,
					&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), and describes how and why we
					collect, store, use and/or share your personal information when you use our
					site/services (&quot;Services&quot;). If you use our services, you agree to
					these policies. If you have any questions or concerns, please contact us at
					david@makepurple.com.
				</p>
				<Header2>Policy Summary</Header2>
				<Header3>Personal Data is collected for the following purposes:</Header3>
				<UnorderedList>
					<li>
						<Header4>User database management</Header4>
						<p>
							Personal Data: Data communicated while using the service; email address;
							Universally unique identifier (UUID); Usage Data; various types of Data
							as specified in the privacy policy of the service
						</p>
					</li>
				</UnorderedList>
				<Header2>Contact Information</Header2>
				<Header3>Owner contact email</Header3>
				<p>david@makepurple.com</p>
				<Header2>Full Policy</Header2>
				<Header3>What types of Data do we collect?</Header3>
				<p>
					Among the types of Personal Data this application collects, either by itself or
					through third parties, there are: email addresses; Usage Data; Universally
					unique indentifier (UUID); Data created or communicated while using the service.
				</p>
				<p>
					Personal Data may be collected when you request information about our Services;
					when you contact us; and when you voluntarily provide it via participation in
					activities on the Services either manually or, in the case of Usage Data,
					automatically.
				</p>
				<p>
					When you create a user account on our Services, we will require that you connect
					through your GitHub account. By connecting through your GitHub account, we will
					additionally collect information on your username, email address, profile
					picture, bio, website urls, GitHub commit history and repositories.
				</p>
				<p>
					If you are uncertain or have any questions about the Personal Data we collect,
					you can contact the Owner.
				</p>
				<p>
					Any use of Cookies, local storage, or other tracking tools, by this Application
					or third-party services used by this Application serves the purpose of providing
					functionality for the Service, in addition to any other purposes described
					either in the present policy and in the Cookie Policy, if available.
				</p>
				<Header3>How do we process the Data?</Header3>
				<p>
					The Owner conducts appropriate security measures to prevent unauthorized access,
					modification or desctruction of the Data.
				</p>
			</Content>
		</Root>
	);
};

export default Page;
