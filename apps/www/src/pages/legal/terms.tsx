import { Anchor, MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import NextLink from "next/link";
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
	mt-8
	text-2xl
	md:text-3xl
	md:leading-tight
	font-semibold
	text-gray-700
	text-center
`;

const UnorderedList = tw.ul`
	flex
	flex-col
	gap-4
	pl-12
	list-disc
	list-outside
`;

export const Page: NextPage = () => {
	return (
		<Root size="small">
			<Header>Terms of Service of MakePurple.com</Header>
			<Content>
				<p>Last Updated: March 31, 2022</p>
				<p>
					Please read carefully these Terms of Service (the &quot;Terms&quot;) and our
					Privacy Policy (&quot;Privacy Policy&quot;) because they govern your use of{" "}
					<NextLink href="/" passHref>
						<Anchor>https://makepurple.com</Anchor>
					</NextLink>{" "}
					(&quot;MakePurple&quot;, the &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;,
					&quot;our&quot;) and the services offered by the Site. The Site and our services
					may also be referred to as the &quot;Services&quot; in these Terms.
				</p>
				<Header2>Agreement to Terms</Header2>
				<p>
					These Terms constitute a legally binding agreement made between you, whether
					personally or on behalf of an entity (&quot;you&quot;) and MakePurple concerning
					your access to and use of the Site as well Services related to the site. You
					agree that by accessing the Site, you have read, understood and agreed to be
					bound by all of these Terms of Use. If you do not agree with all of these terms,
					then you are expressly prohibited from using the site and you must discontinue
					use immediately.
				</p>
				<Header2>Eligibility</Header2>
				<p>
					By agreeing to these Terms, you represent and warrant to us: (i) that you are at
					least eighteen (18) years of age; (ii) that you have no previously been
					suspended or removed from the Site or our Services and (iii) that your use of
					the Site and our Services is in compliance with any and all applicable laws and
					regulations.
				</p>
				<Header2>User Accounts and Registration</Header2>
				<p>
					Certain features of the Services will require an account. You agree to keep your
					account credentials, such as password, confidential and will be responsible for
					all use of your account and password. If we deem your account falls under any
					unauthorized use as defined by the Terms or applicable laws, we have the right
					to suspend or terminate your account.
				</p>
				<Header2>User Generated Contributions</Header2>
				<p>
					The Site may invite you to chat, contribute to, or participate in blogs, message
					boards, online forums, and other functionality, and may provide you with the
					opportunity to create, submit, post, display, transmit, perform, publish,
					distribute, or broadcast content and materials to us or on the Site. including
					but not limited to text, writings, video, audio, photographs, graphics, code,
					comments, suggestions, or personal information or other material (collectively,
					&quot;Contributions&quot;). Contributions may be viewable by other users of the
					Site and through third-party websites. As such, any contributions you transmit
					may be treated as non-confidential and non-proprietary. When you create or make
					any Contributions, you thereby represent and warrant that your content:
				</p>
				<UnorderedList>
					<li>
						does not infringe, violate, or misappropriate any third-party right,
						including any copyright, patent, trade-secret, moral right, privacy right,
						right of publicity, or any other intellectual property or proprietary right
					</li>
					<li>does not slander, defame, or libel any third-party</li>
					<li>does not ridicule, mock, disparage, intimidate or abuse anyone</li>
					<li>
						do not include any offensive comments that are connected to race, national
						origin, gender, sexual preference or physical handicap
					</li>
					<li>
						are not used to harass or threaten (in the legal sense of those terms) any
						other person and to promote violence
					</li>
					<li>
						does not violate any applicable law concerning child pornography, or
						otherwise intended to protect the health or well-being of minors.
					</li>
					<li>
						are not unsolicited or unauthorized advertising, promotional materials,
						pyramid schemes, chain letters, span, mass mailings, or other forms of
						solicitation
					</li>
					<li>
						is not obscene, lewd, lascivious, filthy, violent, harassing, libelous,
						slanderous, or otherwise objectionable (as determined by us)
					</li>
					<li>
						does not violate any provision of these Terms or any applicable law or
						regulation
					</li>
				</UnorderedList>
				<Header2>License grant to MakePurple</Header2>
				<p>
					By submitting, posting, or publishing your Contributions to the Site or our
					Services, you are granting MakePurple a perpetual, irrevocable, worldwide,
					non-exclusive, royalty-free right and license (with the right to sublicense) to
					use, incorporate, exploit, display, perform reproduce, distribute and prepare
					derivative works of your Contributions in any media formats and through any
					media channels. You will retain ownership of your Content; however, any use of
					your Content by MakePurple may be without any compensation paid to you.
				</p>
				<p>
					We have the right, in our sole and absolute discretion to (i) edit, redact or
					otherwise change any Contributions; (ii) recategorize and Contributions to place
					them in more appropriate locations on the Site; and (iii) to pre-screen or
					delete any Contributions at any time and for any reason, without notice.
				</p>
			</Content>
		</Root>
	);
};

export default Page;
