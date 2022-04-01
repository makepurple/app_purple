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

const Disclaimer = tw.p`
	uppercase
`;

const LimitationOfLiability = tw.p`
	uppercase
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
						pyramid schemes, chain letters, spam, mass mailings, or other forms of
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
				<Header2>Prohibited Users</Header2>
				<p>
					You may not access or use the Site for any purpose other than that for which we
					make the Site available. You agree not to do any of the following:
				</p>
				<UnorderedList>
					<li>
						Post, upload, publish, submit or transmit any Contribution that (i)
						infringes or violates a third-party&apos;s patent, copyright, trademark,
						moral rights or other intellectual property rights, or rights of publicity
						or privacy; (ii) violates, or encourages any conduct that would violate any
						applicable law; (iii) is fraudulent, false, misleading or deceptive; (iv) is
						defamatory, obscene, pornographic, vulgar or offensive; (v) promotes illegal
						or harmful activities
					</li>
					<li>
						Use the Site or Services in any manner that could damage, disable,
						overburden, disrupt or impair any MakePurple servers or API
					</li>
					<li>
						Transmit any viruses, worms, defects, Trojan horses or any items of a
						desctructive nature through your use of the Site or our Services
					</li>
					<li>
						Attempt to gain unauthorized access to any account that&apos;s not yours on
						MakePurple or GitHub through hacking, password mining or other means
					</li>
					<li>
						Attempt to obtain any materials or information through any means not
						intentionally made available through the Site or our Services
					</li>
					<li>
						Attempt to use the Site or our Services in any way that violates any
						applicable federal, state, local, or international law or regulation
					</li>
					<li>
						Systematically retrieve data or other content from the Site to create or
						compile, directly or indirectly, a collection, compilation, database or
						directory
					</li>
					<li>Use the Site to advertise or offer to sell goods and services</li>
					<li>
						Engage in any automated use of the system, such as using scripts to send
						comments or mesages, or using any data mining, robots, or similar data
						gathering and extraction tools.
					</li>
				</UnorderedList>
				<Header2>Links to Third Party Websites or Resources</Header2>
				<p>
					The Site may contain links to other websites, articles, photographs, texts,
					graphics, pictures, designs, music, sounds, videos, information, applications,
					software and other content or items belonging to or originating from
					third-parties (&apos;Third-Party Content&apos;). Such Third-Party Sites and
					Third-Party Content are not investigated, monitored, or checked for accuracy,
					appropriateness, or completeness by us, and we are not responsible for any
					Third-Party Sites accessed through the Site or any Third-Party Content posted
					on, available through, or installed from the Site. Inclusion of, linking to, or
					permitting the use of any Third-Party Websites or any Third-Party Content does
					not imply approval or endorsement by us. You acknowledge sole responsibility for
					and assume all risk arising your use of any Third-Party Content.
				</p>
				<Header2>Termination or use</Header2>
				<p>
					We may at our sole discretion suspend or terminate your access to the Site
					and/or our Services at any time, with or without notice for any reason or no
					reason at all. We also reserve the right to modify or discontinue the Site
					and/or our Service at any time (including limiting or discontinuing certain
					features of the Site and/or our Service) without any notice to you. We will have
					no liability whatsoever on account of any change to the Site and/or our Service
					or any suspension or termination of your access to or use of the Site and/or our
					Service.
				</p>
				<Header2>Indemnity</Header2>
				<p>
					You agree that you will be responsible for your use of the Site and our
					Services, and you agree to defend, indemnify, and hold harmless MakePurple and
					its officers, directors, employees and agents from and against any claims,
					disputes, demands, liabilities, damanges, losses, costs and expenses including
					without limitation, reasonable legal and accounting fees arising out of or in
					any way connected to (i) your access to the Site and/or our Services, (ii) your
					Contributions, and/or (iii) your violation of these Terms.
				</p>
				<Header2>Disclaimers</Header2>
				<Disclaimer>
					The Site and our Services are provided on an as-is and as-available basis. You
					agree that your use of the Site and our Services will be at your sole risk. To
					the fullest extent permitted by law, we disclaim all warranties, express or
					implied, in connection with the site and your use thereof, including without
					limitation, the implied warranties of merchantability, fitness for a particular
					purpose, and non-infringement. We make no warranties or representations about
					the accuracy or completeness of the Site&apos;s content or the content of any
					websites linked to the site, and we will assume no liability of responsibility
					for any (i) errors, mistakes or inaccuracies of content and materials; (ii)
					personal injury or damage of any nature whatsoever resulting from your access to
					and use of the Site; (iii) any unauthorized access to or use of our servers
					and/or any and all personal information stored therein; (iv) any bugs, viruses,
					trojan horses or the like which may be transmitted to or through the Site by any
					Third-Party; and/or (v) any errors or omissions in any content and materials or
					any loss or damage of any kind incurred as a result of the use of any content
					posted, transmitted, or otherwise made available via the Site. We do not
					warrant, endorse, guarantee, or assume responsibility for any product or service
					advertised or offered by a Third-Party or User through the Site, any hyperlinked
					website, or any website or mobile application featured in any banner or other
					advertising, and we will not be a party to or in any way responsible for
					monitoring any transaction between you and any Third-Party providers or products
					or services.
				</Disclaimer>
				<Header2>Limitation of Liability</Header2>
				<LimitationOfLiability>
					In no event will we or our directors, employees, or agents be liable to you or
					any Third-Party for any direct, indirect, consequential, exemplary, incidental,
					special, or punitive damages, including lost profit, lost revenue, loss of data,
					or other damages arising from your use of the site, even if we have been advised
					of the possibility of such damages. Notwithstanding anything to the contrary
					contained herein, our liability to you for any cause whatsoever and regardless
					of the form of the action, will at all times be limited to the lesser of the
					amount paid, if any, by you to us. Certain US state laws and international laws
					do not allow limitations on implied warranties or the exclusion or limitation of
					certain damages. If these laws apply to you, some or all of the above
					disclaimers or limitations may not apply to you, and you may have additional
					rights.
				</LimitationOfLiability>
				<Header2>Governing Law</Header2>
				<p>
					These Terms of Use and your use of the Site are governed by and construed in
					accordance with the laws of the Federal Arbitration Act, federal arbitration
					law, and the State of California, without regard to its conflict of laws
					provisions. To the extent that any lawsuit or court proceeding is permitted
					hereunder, you and MakePurple agree to submit to the personal and exclusive
					jurisdiction of the state and federal courts located within the North District
					of California for the purpose of litigating all such disputes.
				</p>
				<Header2>Changes to these Terms</Header2>
				<p>
					We may occasionally revise these Terms from time to time in our sole discretion.
					If there are any changes to this privacy notice, we may notify you either by
					prominently posting a notice of such changes or by directly sending you a
					notification. We encourage you to review these Terms frequently to be informed
					of how we are protecting your information. If you do not agree with the revised
					Terms, your sole and exclusive remedy will be to discontinue your use of the
					Site and our Services.
				</p>
				<Header2>General</Header2>
				<p>
					These Terms of User and any policies or operating rules posted by us on the Site
					constitute the entire agreement between you and MakePurple. Our failure to
					exercise or enforce any right or provision of these Terms of Use shall not
					operate as a waiver of such right or provision. These Terms operate to the
					fullest extent permissible by law. We may assign any or all of our rights and
					obligations to others at any time. We shall not be responsible or liable for any
					loss, damage, delay or failure to act caused by any cause beyond our reasonable
					control. If any provision or part of a provision of these Terms is determined to
					be unlawful, void or unenforceable, that provision or part of the provision is
					deemed severable from these Terms and does not affect the validity and
					enforceability of any remaining provisions. There is no joint venture,
					partnership, employment or agency relationship created between you and
					MakePurple as a result of these Terms or use of the Site. You agree that these
					Terms will not be construed against us by virtue of having drafted them. You
					hereby waive any and all defenses you may have based on the electronic form of
					these Terms and the lack of signing by the parties hereto to exclude these Terms
					of Use.
				</p>
				<Header2>Contact Information</Header2>
				<p>
					You may contact us emailing us at{" "}
					<Anchor
						href="mailto:david@makepurple.com"
						rel="nofollow noopener"
						target="_blank"
					>
						david@makepurple.com
					</Anchor>
				</p>
			</Content>
		</Root>
	);
};

export default Page;
