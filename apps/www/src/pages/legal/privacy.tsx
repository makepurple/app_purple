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
	flex
	flex-col
	gap-4
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
				<p>Last Updated: March 31, 2022</p>
				<p>
					This Privacy Policy applies to{" "}
					<NextLink href="/" passHref>
						<Anchor>https://makepurple.com</Anchor>
					</NextLink>{" "}
					(&quot;MakePurple&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), and
					describes how and why we collect, store, use and/or share your personal
					information when you use our application/services (&quot;Application&quot;,
					&quot;Service&quot;). If you use our Service, you agree to these policies. If
					you have any questions or concerns, please contact us at{" "}
					<Anchor
						href="mailto:david@makepurple.com"
						rel="nofollow noopener"
						target="_blank"
					>
						david@makepurple.com
					</Anchor>
					.
				</p>
				<Header2>Policy Summary</Header2>
				<Header3>Personal Data is collected for the following purposes:</Header3>
				<UnorderedList>
					<li>
						<Header4>User database management</Header4>
						<p>
							Personal Data: Data communicated while using the service; email address;
							Universally unique identifier (UUID); Internet Protocol (IP) address,
							browser/device characteristics; Usage Data; various types of Data as
							specified in the privacy policy of the service
						</p>
					</li>
				</UnorderedList>
				<Header2>Contact Information</Header2>
				<Header3>Owner contact email</Header3>
				<Anchor href="mailto:david@makepurple.com" rel="nofollow noopener" target="_blank">
					david@makepurple.com
				</Anchor>
				<Header2>Full Policy</Header2>
				<Header3>What types of Data do we collect?</Header3>
				<p>
					Among the types of Personal Data this application collects, either by itself or
					through third parties, there are: email addresses; Usage Data; Universally
					unique indentifier (UUID); Internet Protocol (IP) address, browser/device
					characteristics; Data created or communicated while using the service.
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
					picture, bio, website urls, GitHub commit history and public repositories. We
					will use this information only for the purposes described in this policy or
					otherwise made clear to you on the relevant Services. Please note that we do not
					control, and are not responsible for, other uses of your personal information by
					GitHub. We recommend that you review GitHub&apos;s privacy notice to understand
					how they collect, use and share your personal information.
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
					The Data is processed using computers and/or IT-enabled tools, to provide,
					improve and administer our Services, communicate with you, for security and
					fraud prevention, and to comply with law.
				</p>
				<p>
					The Owner conducts appropriate security measures to prevent unauthorized access,
					modification or desctruction of the Data. However, as no system is 100% secure,
					we cannot fully ensure the security of any information you provide to us and do
					not accept liability for any unintentional disclosure.
				</p>
				<Header3>Do we use Cookies and other Trackers?</Header3>
				<p>
					We may use cookies and similar tracking technologies (like web beacons, pixels
					and local storage) to access or store information. Specific information about
					how we use such technologies and how you can refuse certain cookies is available
					in our Cookie Policy, if available.
				</p>
				<Header3>When and with whom do we share your information?</Header3>
				<p>
					We will automatically collect and share some information such as your
					Universally unique identifier (UUID); Internet Protocol (IP) address;
					browser/device characteristics; Usage Data; and any other Personal Data we
					collect about you for the following purposes and using the following services:
				</p>
				<UnorderedList>
					<li>
						<Header4>Infrastructure Monitoring</Header4>
						<p>
							This type of service allows this Application to monitor the use and
							behavior of its components in order to improve its maintenance,
							performance and operation.
						</p>
						<p>
							The Personal Data that is processed depends on the characteristics,
							details and implementations of those services, whose function is to
							monitor the activities on this Application.
						</p>
					</li>
					<li>
						<Header4>Sentry (Functional Software Inc.)</Header4>
						<p>Sentry is a monitoring service provided by Functional Software, Inc.</p>
						<p>
							The Personal Data that is processed includes various types of Data
							specified in Sentry&apos;s privacy policy.
						</p>
					</li>
					<li>
						<Header4>User database management</Header4>
						<p>
							This Service allows the Owner to track User activities through
							third-party analytics services and to build public user profiles
							starting from the Personal Data collected from registration through
							GitHub, such as username, profile picture, bio, website urls, GitHub
							commit history and public repositories; and/or any other information the
							User provides to this Application. These public profiles will be
							viewable by other Users of this application, and may be discoverable by
							search engines.
						</p>
						<p>
							Some of these services may also enable the Service to send timed
							messages to the User, such as emails based on specific actions or events
							performed on this Application.
						</p>
					</li>
				</UnorderedList>
				<Header3>How long do we retain your data?</Header3>
				<p>
					Personal Data will be processed and stored for as long as you use our Service or
					as long as necessary to provide our Services, fulfill the purpose(s) for which
					it was collected, resolve disputes and to comply with law.
				</p>
				<Header3>Do we collect information from minors?</Header3>
				<p>
					We do not knowingly collect data from or direct our service to children under 18
					years of age. By using the Services, you represent that you are at least 18 or
					that you are the parent or guardian of such a minor and consent to such minor
					dependent&apos;s use of the Services. If we learn that personal information from
					users less than 18 years of age has been collected, we will deactivate the
					account and take reasonable measures to promptly delete such data from our
					records.
				</p>
				<p>
					If you become aware of any data we may have collected from children under age
					18, please contact us at{" "}
					<Anchor
						href="mailto:david@makepurple.com"
						rel="nofollow noopener"
						target="_blank"
					>
						david@makepurple.com
					</Anchor>
					.
				</p>
				<Header3>What are your privacy rights as Users?</Header3>
				<p>
					Users may exercise certain rights regarding their Data processed by the Owner.
				</p>
				<p>In particular, Users have the right to do the following:</p>
				<Header4>Access to/transferal of Personal Data</Header4>
				<p>
					You may receive your electronic Personal Data, or have it transferred to another
					party.
				</p>
				<Header4>Request Correction</Header4>
				<p>
					You may verify the accuracy of your Personal Data, and ask for it to be updated
					or corrected.
				</p>
				<Header4>Request Deletion</Header4>
				<p>
					You may request the erasure of your Personal Data from the Owner. This can also
					be done on your{" "}
					<NextLink href="/account" passHref>
						<Anchor>account page</Anchor>
					</NextLink>{" "}
					when logged-in.
				</p>
				<Header4>
					Request to obtain a list of Third Parties to whom Personal Data was disclosed
				</Header4>
				<p>
					You may request to receive a list of third-parties to whom we have disclosed
					your Personal Data (if any) for the prior calendar year, as well as the types of
					Personal Data that was disclosed to those parties.
				</p>
				<p>
					If you have any questions or would like to exercise any of these rights, please
					contact us at{" "}
					<Anchor
						href="mailto:david@makepurple.com"
						rel="nofollow noopener"
						target="_blank"
					>
						david@makepurple.com
					</Anchor>
					. We will process such requests in accordance with applicable laws. To protect
					your privacy, we will take steps to verify your identity before fulfilling your
					request.
				</p>
				<Header3>Definitions and legal references</Header3>
				<Header4>Personal Data (or Data)</Header4>
				<p>
					Any information that directly, indirectly, or in association with other
					information — including a personal identification number — allows for the
					identification of a person.
				</p>
				<Header4>Usage Data</Header4>
				<p>
					Information collected automatically through this Application (or third-party
					services used in this Application), which can include the internet protocol (IP)
					addresses, domain names, browser/device characteristics used by the Users who
					use this Application, the Uniform Resource Identifier (URI) addresses, the time
					of the requests, the methods utilitized to submit the requests to the server,
					the size of the file received in response, the status code of the server&apos;s
					answer, the country of origin, the various time details per visit, details about
					the sequence of pages visited within the Application, and other parameters about
					the User&apos;s IT environment.
				</p>
				<Header4>User</Header4>
				<p>The individual using this application who coincides with the Data Subject.</p>
				<Header4>Data Subject</Header4>
				<p>The natural person to whom the Personal Data refers.</p>
				<Header4>Data Controller (or Owner)</Header4>
				<p>
					The natural or legal person, public authority, agency or other body, which alone
					or jointly with others, determins the purposes and means of processing of
					Personal Data, including security measures concerning the operation and use of
					this Application. The Data Controller, unless otherwise specified, is the Owner
					of this Application.
				</p>
				<Header4>Application (or Service)</Header4>
				<p>
					The site and services provided by the site as described in the relative terms
					(if available).
				</p>
				<Header4>Cookie</Header4>
				<p>
					Cookies are Trackers consisting of small sets of data that is stored in the
					User&apos;s browser.
				</p>
				<Header4>Tracker</Header4>
				<p>
					Tracker indicates any technology — e.g. Cookies, unique identifiers, web
					beacons, embedded scripts, e-tags, fingerprinting, local storage — that enables
					the tracking of Users, for example by accessing or storing information on the
					User&apos;s device.
				</p>
				<Header3>Other provisions</Header3>
				<Header4>Supervisory Authority</Header4>
				<p>
					If you live in the European Union (EU), you have the right to lodge a complaint
					with the Owner if you believe our processing or your Personal Data violates
					applicable law.
				</p>
				<Header4>Changes to our Privacy Policy</Header4>
				<p>
					We may occasionally revise this Privacy Policy from time to time in our sole
					discretion. If there are any changes to this privacy notice, we may notify you
					either by prominently posting a notice of such changes or by directly sending
					you a notification. We encourage you to review this Privacy Policy frequently to
					be informed of how we are protecting your information. If you do not agree with
					the revised Privacy Policy, your solle and exclusive remedy will be to
					discontinue your use of the Site and our Services.
				</p>
			</Content>
		</Root>
	);
};

export default Page;
