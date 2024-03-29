import type { InferComponentProps } from "@makepurple/typings";
import * as React from "react";
import type { Ref, SVGProps } from "react";

export type SvgIconComponent = typeof BellIcon;
export type SvgIconComponentProps = InferComponentProps<SvgIconComponent>;

export const BellIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 1C8.318 1 5 3.565 5 7v4.539a3.25 3.25 0 01-.546 1.803l-2.2 3.299A1.518 1.518 0 003.519 19H8.5a3.5 3.5 0 107 0h4.982a1.518 1.518 0 001.263-2.36l-2.2-3.298A3.25 3.25 0 0119 11.539V7c0-3.435-3.319-6-7-6zM6.5 7c0-2.364 2.383-4.5 5.5-4.5s5.5 2.136 5.5 4.5v4.539c0 .938.278 1.854.798 2.635l2.199 3.299a.017.017 0 01.003.01l-.001.006-.004.006-.006.004-.007.001H3.518l-.007-.001-.006-.004-.004-.006-.001-.007.003-.01 2.2-3.298a4.75 4.75 0 00.797-2.635V7zM14 19h-4a2 2 0 104 0z"
			/>
		</svg>
	))
);
export const BoldIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M6 4.75c0-.69.56-1.25 1.25-1.25h5a4.75 4.75 0 013.888 7.479A5 5 0 0114 20.5H7.25c-.69 0-1.25-.56-1.25-1.25V4.75zM8.5 13v5H14a2.5 2.5 0 000-5H8.5zm0-2.5h3.751A2.25 2.25 0 0012.25 6H8.5v4.5z"
			/>
		</svg>
	))
);
export const BookIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M0 3.75A.75.75 0 01.75 3h7.497c1.566 0 2.945.8 3.751 2.014A4.496 4.496 0 0115.75 3h7.5a.75.75 0 01.75.75v15.063a.75.75 0 01-.755.75l-7.682-.052a3 3 0 00-2.142.878l-.89.891a.75.75 0 01-1.061 0l-.902-.901a3 3 0 00-2.121-.879H.75a.75.75 0 01-.75-.75v-15zm11.247 3.747a3 3 0 00-3-2.997H1.5V18h6.947a4.5 4.5 0 012.803.98l-.003-11.483zm1.503 11.485V7.5a3 3 0 013-3h6.75v13.558l-6.927-.047a4.5 4.5 0 00-2.823.971z"
			/>
		</svg>
	))
);
export const BookmarkIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M5 3.75C5 2.784 5.784 2 6.75 2h10.5c.966 0 1.75.784 1.75 1.75v17.5a.75.75 0 01-1.218.586L12 17.21l-5.781 4.625A.75.75 0 015 21.25V3.75zm1.75-.25a.25.25 0 00-.25.25v15.94l5.031-4.026a.75.75 0 01.938 0L17.5 19.69V3.75a.25.25 0 00-.25-.25H6.75z"
			/>
		</svg>
	))
);
export const CancelIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={24}
			width={24}
			viewBox="0 0 24 24"
			ref={ref}
			{...props}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
			/>
		</svg>
	))
);
export const ChatIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			ref={ref}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
			/>
		</svg>
	))
);
export const ChevronDownIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fillRule="evenodd"
				fill="currentColor"
				d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"
			/>
		</svg>
	))
);
export const CodeIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M8.78 4.97a.75.75 0 010 1.06L2.81 12l5.97 5.97a.75.75 0 11-1.06 1.06l-6.5-6.5a.75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0zm6.44 0a.75.75 0 000 1.06L21.19 12l-5.97 5.97a.75.75 0 101.06 1.06l6.5-6.5a.75.75 0 000-1.06l-6.5-6.5a.75.75 0 00-1.06 0z"
			/>
		</svg>
	))
);
export const CodeSquareIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M10.3 8.24a.75.75 0 01-.04 1.06L7.352 12l2.908 2.7a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 011.06.04zm3.44 1.06a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.908-2.7-2.908-2.7z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0120.25 22H3.75A1.75 1.75 0 012 20.25V3.75zm1.75-.25a.25.25 0 00-.25.25v16.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H3.75z"
			/>
		</svg>
	))
);
export const CommentIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3.25 4a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h2.5a.75.75 0 01.75.75v3.19l3.72-3.72a.75.75 0 01.53-.22h10a.25.25 0 00.25-.25V4.25a.25.25 0 00-.25-.25H3.25zm-1.75.25c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v12.5a1.75 1.75 0 01-1.75 1.75h-9.69l-3.573 3.573A1.457 1.457 0 015 21.043V18.5H3.25a1.75 1.75 0 01-1.75-1.75V4.25z"
			/>
		</svg>
	))
);
export const CopyIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z"
			/>
			<path
				fill="currentColor"
				d="M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z"
			/>
		</svg>
	))
);
export const DiscordIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			height={24}
			width={24}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				stroke="currentColor"
				fill="currentColor"
				strokeWidth={0}
				d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
			/>
		</svg>
	))
);
export const ForkIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"
			/>
			<path fill="currentColor" fillRule="evenodd" d="M11.25 16.25v-5h1.5v5h-1.5z" />
		</svg>
	))
);
export const GearIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			ref={ref}
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	))
);
export const GitHubIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			role="img"
			height={24}
			width={24}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<title>{"GitHub"}</title>
			<path
				fill="currentColor"
				d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
			/>
		</svg>
	))
);
export const HeadingIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M6.25 4a.75.75 0 01.75.75V11h10V4.75a.75.75 0 011.5 0v14.5a.75.75 0 01-1.5 0V12.5H7v6.75a.75.75 0 01-1.5 0V4.75A.75.75 0 016.25 4z"
			/>
		</svg>
	))
);
export const HeartIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M14 20.408c-.492.308-.903.546-1.192.709-.153.086-.308.17-.463.252h-.002a.75.75 0 01-.686 0 16.709 16.709 0 01-.465-.252 31.147 31.147 0 01-4.803-3.34C3.8 15.572 1 12.331 1 8.513 1 5.052 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262A31.146 31.146 0 0114 20.408z"
			/>
		</svg>
	))
);
export const HexagonIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				opacity={0.4}
				d="M23.0617 10.9917L18.3951 2.99167C18.2185 2.68995 17.9661 2.43968 17.6629 2.26571C17.3597 2.09174 17.0163 2.00014 16.6667 2H7.33339C6.98369 1.99999 6.64007 2.09153 6.33671 2.2655C6.03336 2.43948 5.78082 2.68983 5.60423 2.99167L0.937559 10.9917C0.759698 11.2979 0.666016 11.6458 0.666016 12C0.666016 12.3542 0.759698 12.7021 0.937559 13.0083L5.60423 21.0083C5.78082 21.3102 6.03336 21.5605 6.33671 21.7345C6.64007 21.9085 6.98369 22 7.33339 22H16.6667C17.0164 22 17.36 21.9085 17.6634 21.7345C17.9668 21.5605 18.2193 21.3102 18.3959 21.0083L23.0626 13.0083C23.2403 12.702 23.3338 12.3541 23.3337 11.9999C23.3335 11.6457 23.2397 11.2979 23.0617 10.9917V10.9917ZM19.4288 12.6108L16.2463 18.0654C16.1395 18.2484 15.9866 18.4002 15.8029 18.5056C15.6192 18.6111 15.4111 18.6667 15.1992 18.6667H8.80089C8.58905 18.6667 8.3809 18.6111 8.19719 18.5056C8.01347 18.4002 7.86061 18.2484 7.75381 18.0654L4.57131 12.6108C4.46326 12.4254 4.40634 12.2146 4.40634 12C4.40634 11.7854 4.46326 11.5746 4.57131 11.3892L7.75381 5.93458C7.86054 5.75157 8.0134 5.59974 8.19712 5.49424C8.38085 5.38874 8.58903 5.33326 8.80089 5.33333H15.1992C15.4111 5.33326 15.6193 5.38874 15.803 5.49424C15.9867 5.59974 16.1396 5.75157 16.2463 5.93458L19.4288 11.3892C19.5369 11.5746 19.5938 11.7854 19.5938 12C19.5938 12.2146 19.5369 12.4254 19.4288 12.6108V12.6108Z"
			/>
			<path
				fill="currentColor"
				d="M19.4288 12.6109L16.2463 18.0655C16.1395 18.2484 15.9867 18.4002 15.803 18.5057C15.6193 18.6112 15.4111 18.6667 15.1993 18.6667H8.80093C8.58908 18.6667 8.38094 18.6112 8.19722 18.5057C8.01351 18.4002 7.86064 18.2484 7.75384 18.0655L4.57134 12.6109C4.4633 12.4254 4.40637 12.2147 4.40637 12C4.40637 11.7854 4.4633 11.5746 4.57134 11.3892L7.75384 5.93462C7.86058 5.75161 8.01343 5.59978 8.19716 5.49428C8.38089 5.38878 8.58907 5.3333 8.80093 5.33337H15.1993C15.4111 5.3333 15.6193 5.38878 15.803 5.49428C15.9868 5.59978 16.1396 5.75161 16.2463 5.93462L19.4288 11.3892C19.5369 11.5746 19.5938 11.7854 19.5938 12C19.5938 12.2147 19.5369 12.4254 19.4288 12.6109V12.6109Z"
			/>
		</svg>
	))
);
export const HomeIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"
			/>
		</svg>
	))
);
export const ImageIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M19.25 4.5H4.75a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h.19l9.823-9.823a1.75 1.75 0 012.475 0l2.262 2.262V4.75a.25.25 0 00-.25-.25zm.25 9.56l-3.323-3.323a.25.25 0 00-.354 0L7.061 19.5H19.25a.25.25 0 00.25-.25v-5.19zM4.75 3A1.75 1.75 0 003 4.75v14.5c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0021 19.25V4.75A1.75 1.75 0 0019.25 3H4.75zM8.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
			/>
		</svg>
	))
);
export const InfoIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"
			/>
		</svg>
	))
);
export const IssueIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 13a2 2 0 100-4 2 2 0 000 4z"
			/>
		</svg>
	))
);
export const ItalicIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M10 4.75a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-3.514l-5.828 13h3.342a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h3.514l5.828-13H10.75a.75.75 0 01-.75-.75z"
			/>
		</svg>
	))
);
export const LicenseIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12.75 2.75a.75.75 0 00-1.5 0V4.5H9.276a1.75 1.75 0 00-.985.303L6.596 5.957A.25.25 0 016.455 6H2.353a.75.75 0 100 1.5H3.93L.563 15.18a.762.762 0 00.21.88c.08.064.161.125.309.221.186.121.452.278.792.433.68.311 1.662.62 2.876.62a6.919 6.919 0 002.876-.62c.34-.155.606-.312.792-.433.15-.097.23-.158.31-.223a.75.75 0 00.209-.878L5.569 7.5h.886c.351 0 .694-.106.984-.303l1.696-1.154A.25.25 0 019.275 6h1.975v14.5H6.763a.75.75 0 000 1.5h10.474a.75.75 0 000-1.5H12.75V6h1.974c.05 0 .1.015.14.043l1.697 1.154c.29.197.633.303.984.303h.886l-3.368 7.68a.75.75 0 00.23.896c.012.009 0 0 .002 0a3.154 3.154 0 00.31.206c.185.112.45.256.79.4a7.343 7.343 0 002.855.568 7.343 7.343 0 002.856-.569c.338-.143.604-.287.79-.399a3.5 3.5 0 00.31-.206.75.75 0 00.23-.896L20.07 7.5h1.578a.75.75 0 000-1.5h-4.102a.25.25 0 01-.14-.043l-1.697-1.154a1.75 1.75 0 00-.984-.303H12.75V2.75zM2.193 15.198a5.418 5.418 0 002.557.635 5.418 5.418 0 002.557-.635L4.75 9.368l-2.557 5.83zm14.51-.024c.082.04.174.083.275.126.53.223 1.305.45 2.272.45a5.846 5.846 0 002.547-.576L19.25 9.367l-2.547 5.807z"
			/>
		</svg>
	))
);
export const LinkedinIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			role="img"
			height={24}
			width={24}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<title>{"LinkedIn"}</title>
			<path
				fill="currentColor"
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
			/>
		</svg>
	))
);
export const LinkIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M14.78 3.653a3.936 3.936 0 115.567 5.567l-3.627 3.627a3.936 3.936 0 01-5.88-.353.75.75 0 00-1.18.928 5.436 5.436 0 008.12.486l3.628-3.628a5.436 5.436 0 10-7.688-7.688l-3 3a.75.75 0 001.06 1.061l3-3z"
			/>
			<path
				fill="currentColor"
				d="M7.28 11.153a3.936 3.936 0 015.88.353.75.75 0 001.18-.928 5.436 5.436 0 00-8.12-.486L2.592 13.72a5.436 5.436 0 107.688 7.688l3-3a.75.75 0 10-1.06-1.06l-3 3a3.936 3.936 0 01-5.567-5.568l3.627-3.627z"
			/>
		</svg>
	))
);
export const ListOrderedIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M3.604 3.089A.75.75 0 014 3.75V8.5h.75a.75.75 0 010 1.5h-3a.75.75 0 110-1.5h.75V5.151l-.334.223a.75.75 0 01-.832-1.248l1.5-1a.75.75 0 01.77-.037zM8.75 5.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zM5.5 15.75c0-.704-.271-1.286-.72-1.686a2.302 2.302 0 00-1.53-.564c-.535 0-1.094.178-1.53.565-.449.399-.72.982-.72 1.685a.75.75 0 001.5 0c0-.296.104-.464.217-.564A.805.805 0 013.25 15c.215 0 .406.072.533.185.113.101.217.268.217.565 0 .332-.069.48-.21.657-.092.113-.216.24-.403.419l-.147.14c-.152.144-.33.313-.52.504l-1.5 1.5a.75.75 0 00-.22.53v.25c0 .414.336.75.75.75H5A.75.75 0 005 19H3.31l.47-.47c.176-.176.333-.324.48-.465l.165-.156a5.98 5.98 0 00.536-.566c.358-.447.539-.925.539-1.593z"
			/>
		</svg>
	))
);
export const ListUnorderedIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M4 7a1 1 0 100-2 1 1 0 000 2zm4.75-1.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zM5 12a1 1 0 11-2 0 1 1 0 012 0zm-1 7a1 1 0 100-2 1 1 0 000 2z"
			/>
		</svg>
	))
);
export const LocationIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path fill="currentColor" d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"
			/>
		</svg>
	))
);
export const LogoCurrentColor = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			width={200}
			height={200}
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M90.9135 42.6249C90.9135 40.625 92.5347 39.0038 94.5346 39.0038H105.461C107.461 39.0038 109.082 40.625 109.082 42.6249V159.334C109.082 161.333 107.461 162.955 105.461 162.955H94.5346C92.5347 162.955 90.9135 161.333 90.9135 159.334V42.6249Z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M163.243 180.408C146.866 176.665 132.37 167.987 121.401 156.022C120.803 155.37 120.481 154.513 120.481 153.628L120.481 149.568C120.481 146.567 123.985 144.797 126.599 146.273C130.54 148.497 134.799 150.225 139.29 151.37C141.228 151.864 143.133 150.548 143.327 148.558C143.465 147.151 143.535 145.724 143.535 144.281C143.535 131.206 137.771 119.477 128.646 111.496C126.368 109.504 126.799 105.531 129.637 104.481L131.806 103.678C134.531 102.67 134.531 98.8168 131.806 97.8088C129.204 96.8459 129 93.1114 131.338 91.619C144.898 82.9659 154.643 68.8628 157.485 52.3965C157.826 50.426 156.379 48.622 154.38 48.5416C153.671 48.5131 152.959 48.4986 152.242 48.4986C142.923 48.4986 134.174 50.9385 126.599 55.2142C123.985 56.6897 120.481 54.9204 120.481 51.9186L120.481 48.3325C120.481 47.4474 120.803 46.5906 121.401 45.9382C136.296 29.6912 157.695 19.505 181.473 19.505C183.273 19.505 185.059 19.5634 186.83 19.6783C188.826 19.8078 190.268 21.6066 189.972 23.5842C185.845 51.1503 169.351 74.6723 146.317 88.3232C143.555 89.9601 143.778 94.2478 146.789 95.362L152.794 97.5841C155.947 98.7506 155.947 103.21 152.794 104.376L142.296 108.261C139.458 109.311 139.046 113.243 141.442 115.092C157.531 127.508 167.894 146.982 167.894 168.876C167.894 171.818 167.707 174.716 167.344 177.559C167.091 179.542 165.192 180.854 163.243 180.408Z"
			/>
			<path
				fill="currentColor"
				d="M79.5178 149.568V153.629C79.5178 154.514 79.196 155.371 78.5978 156.023C67.6292 167.988 53.1329 176.665 36.757 180.408C34.8079 180.854 32.9092 179.542 32.6561 177.559C32.293 174.716 32.106 171.818 32.106 168.876C32.106 146.982 42.4691 127.508 58.5579 115.092C60.954 113.243 60.5424 109.311 57.7037 108.261L47.206 104.376C44.0534 103.21 44.0534 98.7507 47.206 97.5841L53.2109 95.3621C56.2221 94.2479 56.4445 89.9602 53.6825 88.3232C30.649 74.6724 14.1551 51.1504 10.0278 23.5843C9.73179 21.6067 11.1741 19.8079 13.1696 19.6784C14.9405 19.5634 16.7268 19.505 18.5268 19.505C42.3045 19.505 63.7033 29.6908 78.5978 45.937C79.1959 46.5894 79.5178 47.4462 79.5178 48.3314V51.9186C79.5178 54.9204 76.0139 56.6897 73.3998 55.2143C65.8246 50.9385 57.0755 48.4987 47.7566 48.4987C47.0404 48.4987 46.3276 48.5131 45.6184 48.5416C43.6204 48.6221 42.1732 50.426 42.5134 52.3966C45.3558 68.8629 55.1005 82.966 68.6606 91.6191C70.9994 93.1115 70.7945 96.846 68.1925 97.8088C65.4681 98.8169 65.4681 102.67 68.1925 103.678L70.3616 104.481C73.2002 105.531 73.6314 109.504 71.3531 111.496C62.2278 119.477 56.4641 131.206 56.4641 144.281C56.4641 145.724 56.5343 147.151 56.6716 148.558C56.8655 150.548 58.7712 151.864 60.7087 151.37C65.2 150.225 69.4588 148.497 73.3999 146.273C76.014 144.797 79.5178 146.567 79.5178 149.568Z"
			/>
		</svg>
	))
);
export const LogoLeftWing = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			width={77}
			height={178}
			viewBox="0 0 77 178"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				d="M76.8034 143.672V148.158C76.8034 149.135 76.4479 150.082 75.7872 150.802C63.6709 164.018 47.6579 173.604 29.5685 177.738C27.4154 178.231 25.3181 176.782 25.0385 174.591C24.6375 171.451 24.4308 168.25 24.4308 165C24.4308 140.815 35.8783 119.304 53.6504 105.589C56.2973 103.546 55.8425 99.2026 52.7069 98.0424L41.1107 93.7514C37.6283 92.4628 37.6283 87.5372 41.1107 86.2486L47.744 83.7941C51.0702 82.5633 51.3159 77.827 48.2649 76.0187C22.8214 60.9396 4.6017 34.9564 0.0426154 4.50607C-0.284411 2.32155 1.30885 0.334534 3.51307 0.191452C5.46925 0.0644836 7.44252 0 9.4308 0C35.6965 0 59.3342 11.2515 75.7871 29.1976C76.4479 29.9183 76.8034 30.8647 76.8034 31.8425V35.8051C76.8034 39.1209 72.9329 41.0754 70.0453 39.4455C61.6774 34.7224 52.0129 32.0273 41.719 32.0273C40.9279 32.0273 40.1405 32.0432 39.3571 32.0747C37.15 32.1636 35.5514 34.1563 35.9271 36.333C39.067 54.5222 49.8313 70.101 64.8102 79.6594C67.3937 81.308 67.1674 85.4332 64.2931 86.4968C61.2837 87.6104 61.2837 91.8667 64.2931 92.9802L66.6892 93.8669C69.8248 95.0272 70.3012 99.4153 67.7844 101.616C57.7044 110.432 51.3375 123.388 51.3375 137.831C51.3375 139.425 51.4152 141.002 51.5668 142.556C51.781 144.754 53.8861 146.208 56.0263 145.663C60.9876 144.397 65.6919 142.489 70.0454 140.032C72.933 138.402 76.8034 140.356 76.8034 143.672Z"
				fill="#DB2777"
			/>
		</svg>
	))
);
export const LogoRightWing = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			width={77}
			height={178}
			viewBox="0 0 77 178"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M47.2362 177.739C29.1461 173.604 13.1327 164.018 1.01616 150.801C0.355445 150.08 -8.45889e-06 149.134 1.628e-10 148.156L3.05177e-05 143.672C5.92053e-05 140.356 3.87062 138.402 6.75822 140.032C11.1116 142.489 15.816 144.397 20.7773 145.663C22.9174 146.208 25.0224 144.754 25.2368 142.556C25.3884 141.002 25.466 139.426 25.466 137.831C25.466 123.388 19.0993 110.432 9.01923 101.616C6.50239 99.4153 6.97869 95.0272 10.1144 93.8669L12.5104 92.9803C15.5197 91.8667 15.5197 87.6104 12.5104 86.4968C9.63618 85.4332 9.40984 81.308 11.9933 79.6594C26.9721 70.101 37.7366 54.5222 40.8763 36.333C41.252 34.1563 39.6536 32.1636 37.4463 32.0747C36.6631 32.0432 35.8757 32.0273 35.0844 32.0273C24.7905 32.0273 15.1261 34.7224 6.75828 39.4456C3.87069 41.0754 6.03093e-05 39.1209 3.05177e-05 35.8051L1.628e-10 31.8438C-8.78442e-06 30.8661 0.355477 29.9196 1.01619 29.1989C17.4692 11.252 41.1076 0 67.3738 0C69.3621 0 71.3354 0.0644684 73.2915 0.191437C75.4958 0.334518 77.0889 2.32155 76.7619 4.50607C72.2028 34.9564 53.9831 60.9395 28.5396 76.0187C25.4886 77.8269 25.7343 82.5632 29.0605 83.7941L35.6939 86.2486C39.1764 87.5372 39.1764 92.4628 35.6939 93.7514L24.0977 98.0424C20.9621 99.2026 20.5074 103.546 23.1542 105.589C40.9263 119.304 52.3738 140.815 52.3738 165C52.3738 168.25 52.1673 171.451 51.7663 174.591C51.4866 176.782 49.3893 178.231 47.2362 177.739Z"
				fill="#3B82F6"
			/>
		</svg>
	))
);
export const NoteIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0122.25 21H1.75A1.75 1.75 0 010 19.25V4.75zm1.75-.25a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H1.75z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M5 8.75A.75.75 0 015.75 8h11.5a.75.75 0 010 1.5H5.75A.75.75 0 015 8.75zm0 4a.75.75 0 01.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75z"
			/>
		</svg>
	))
);
export const OpenbaseIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				opacity={0.01}
				d="M1.00391 15.6021L1.0218 3.01235L11.9445 3.05176e-05L22.9207 2.98165L22.9029 15.5714L11.9433 24L1.00391 15.6021Z"
			/>
			<path
				fill="currentColor"
				d="M11.9433 23.9999L1.004 15.6021L0 3.94113L11.9444 0L24 3.94113L22.9029 15.5715L11.9433 23.9999ZM11.9498 1.29997L1.32114 4.83083L11.9439 23.9956L22.6868 4.83338L11.9498 1.30003V1.29997Z"
			/>
		</svg>
	))
);
export const PencilIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"
			/>
		</svg>
	))
);
export const PeopleIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3.5 8a5.5 5.5 0 118.596 4.547 9.005 9.005 0 015.9 8.18.75.75 0 01-1.5.045 7.5 7.5 0 00-14.993 0 .75.75 0 01-1.499-.044 9.005 9.005 0 015.9-8.181A5.494 5.494 0 013.5 8zM9 4a4 4 0 100 8 4 4 0 000-8z"
			/>
			<path
				fill="currentColor"
				d="M17.29 8c-.148 0-.292.01-.434.03a.75.75 0 11-.212-1.484 4.53 4.53 0 013.38 8.097 6.69 6.69 0 013.956 6.107.75.75 0 01-1.5 0 5.193 5.193 0 00-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0017.29 8z"
			/>
		</svg>
	))
);
export const PersonIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
			/>
		</svg>
	))
);
export const PlusIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M11.75 4.5a.75.75 0 01.75.75V11h5.75a.75.75 0 010 1.5H12.5v5.75a.75.75 0 01-1.5 0V12.5H5.25a.75.75 0 010-1.5H11V5.25a.75.75 0 01.75-.75z"
			/>
		</svg>
	))
);
export const PullRequestIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M4.75 3a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 4.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zM4.75 17.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM1.5 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm17.75-1.75a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zM16 19.25a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M4.75 7.25A.75.75 0 015.5 8v8A.75.75 0 014 16V8a.75.75 0 01.75-.75zm8.655-5.53a.75.75 0 010 1.06L12.185 4h4.065A3.75 3.75 0 0120 7.75v8.75a.75.75 0 01-1.5 0V7.75a2.25 2.25 0 00-2.25-2.25h-4.064l1.22 1.22a.75.75 0 01-1.061 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5a.75.75 0 011.06 0z"
			/>
		</svg>
	))
);
export const PulseIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			height={24}
			width={24}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<polyline
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				points="22 12 18 12 15 21 9 3 6 12 2 12"
			/>
		</svg>
	))
);
export const QuoteIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3 6.25a.75.75 0 01.75-.75h13.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.25zM3.75 11a.75.75 0 01.75.75v7a.75.75 0 01-1.5 0v-7a.75.75 0 01.75-.75zM8 12.313a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H8.75a.75.75 0 01-.75-.75zm0 5.937a.75.75 0 01.75-.75h11.5a.75.75 0 010 1.5H8.75a.75.75 0 01-.75-.75z"
			/>
		</svg>
	))
);
export const RepoIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"
			/>
			<path
				fill="currentColor"
				d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"
			/>
		</svg>
	))
);
export const SearchIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
			/>
		</svg>
	))
);
export const SelectorIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			ref={ref}
			{...props}
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M8 9l4-4 4 4m0 6l-4 4-4-4"
			/>
		</svg>
	))
);
export const ShareIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M20 5.5a3.5 3.5 0 01-6.062 2.385l-5.112 3.021a3.497 3.497 0 010 2.188l5.112 3.021a3.5 3.5 0 11-.764 1.29l-5.112-3.02a3.5 3.5 0 110-4.77l5.112-3.021v.001A3.5 3.5 0 1120 5.5zm-1.5 0a2 2 0 11-4 0 2 2 0 014 0zM5.5 14a2 2 0 100-4 2 2 0 000 4zm13 4.5a2 2 0 11-4 0 2 2 0 014 0z"
			/>
		</svg>
	))
);
export const SignOutIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M3 3.25c0-.966.784-1.75 1.75-1.75h5.5a.75.75 0 010 1.5h-5.5a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25h5.5a.75.75 0 010 1.5h-5.5A1.75 1.75 0 013 20.75V3.25zm16.006 9.5l-3.3 3.484a.75.75 0 001.088 1.032l4.5-4.75a.75.75 0 000-1.032l-4.5-4.75a.75.75 0 00-1.088 1.032l3.3 3.484H10.75a.75.75 0 000 1.5h8.256z"
			/>
		</svg>
	))
);
export const SpinnerIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg viewBox="0 0 24 24" width={24} height={24} ref={ref} {...props}>
			<circle
				cx={12}
				cy={12}
				r={10}
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={3}
			/>
		</svg>
	))
);
export const StarIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25zm0 2.445L9.44 7.882a.75.75 0 01-.565.41l-5.725.832 4.143 4.038a.75.75 0 01.215.664l-.978 5.702 5.121-2.692a.75.75 0 01.698 0l5.12 2.692-.977-5.702a.75.75 0 01.215-.664l4.143-4.038-5.725-.831a.75.75 0 01-.565-.41L12 2.694z"
			/>
		</svg>
	))
);
export const TelescopeIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M.408 15.13a2 2 0 01.59-2.642L17.038 1.33a2 2 0 012.85.602l2.828 4.644a2 2 0 01-.851 2.847l-17.762 8.43a2 2 0 01-2.59-.807L.408 15.13zm5.263-4.066l7.842-5.455 2.857 4.76-8.712 4.135-1.987-3.44zm-1.235.86L1.854 13.72a.5.5 0 00-.147.66l1.105 1.915a.5.5 0 00.648.201l2.838-1.347-1.862-3.225zm13.295-2.2L14.747 4.75l3.148-2.19a.5.5 0 01.713.151l2.826 4.644a.5.5 0 01-.212.712l-3.49 1.656z"
			/>
			<path
				fill="currentColor"
				d="M17.155 22.87a.75.75 0 00.226-1.036l-4-6.239a.75.75 0 00-.941-.278l-2.75 1.25a.75.75 0 00-.318.274l-3.25 4.989a.75.75 0 001.256.819l3.131-4.806.51-.232v5.64a.75.75 0 101.5 0v-6.22l3.6 5.613a.75.75 0 001.036.226z"
			/>
		</svg>
	))
);
export const ThumbsDownIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.864 1.864 0 00-.523-.13A1.75 1.75 0 015.25 16h-1.5A1.75 1.75 0 012 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 011.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955zM7 5.082c1.059-.064 2.079-.355 3.118-.651.188-.054.377-.108.568-.16 1.406-.392 3.006-.771 5.142-.771 2.277 0 3.004.274 3.39.781.216.283.388.718.54 1.448.136.65.242 1.45.379 2.477l.05.385c.32 2.398.253 3.794-.102 4.574-.16.352-.375.569-.66.711-.305.153-.74.245-1.365.245h-2.37c-.681 0-1.293.57-1.211 1.328.026.244.065.537.105.834l.07.527c.06.482.105.922.105 1.25 0 1.125-.213 1.617-.473 1.873-.275.27-.774.456-1.795.528-.351.024-.698-.274-.698-.71v-1.053c0-3.55-2.488-5.063-3.68-5.577A3.485 3.485 0 007 12.861V5.08zM3.75 3.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25h-1.5z"
			/>
		</svg>
	))
);
export const ThumbsUpIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12.596 2.043c-1.301-.092-2.303.986-2.303 2.206v1.053c0 2.666-1.813 3.785-2.774 4.2a1.866 1.866 0 01-.523.131A1.75 1.75 0 005.25 8h-1.5A1.75 1.75 0 002 9.75v10.5c0 .967.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.742-1.58c.838.06 1.667.296 2.69.586l.602.17c1.464.406 3.213.824 5.544.824 2.188 0 3.693-.204 4.583-1.372.422-.554.65-1.255.816-2.05.148-.708.262-1.57.396-2.58l.051-.39c.319-2.386.328-4.18-.223-5.394-.293-.644-.743-1.125-1.355-1.431-.59-.296-1.284-.404-2.036-.404h-2.05l.056-.429c.025-.18.05-.372.076-.572.06-.483.117-1.006.117-1.438 0-1.245-.222-2.253-.92-2.941-.684-.675-1.668-.88-2.743-.956zM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26v7.78zM3.75 20.5a.25.25 0 01-.25-.25V9.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25h-1.5z"
			/>
		</svg>
	))
);
export const TrophyIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={16}
			height={16}
			fill="currentColor"
			viewBox="0 0 16 16"
			ref={ref}
			{...props}
		>
			<path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
		</svg>
	))
);
export const TwitterIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			role="img"
			height={24}
			width={24}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			ref={ref}
			{...props}
		>
			<title>{"Twitter"}</title>
			<path
				fill="currentColor"
				d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
			/>
		</svg>
	))
);
export const UnderlineIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				d="M5 21h14v-2H5v2m7-4a6 6 0 0 0 6-6V3h-2.5v8a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 11V3H6v8a6 6 0 0 0 6 6z"
			/>
		</svg>
	))
);
export const UnfoldIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 23a.75.75 0 01-.53-.22l-3.25-3.25a.75.75 0 111.06-1.06L12 21.19l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25A.75.75 0 0112 23z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 22.25a.75.75 0 01-.75-.75v-5.75a.75.75 0 011.5 0v5.75a.75.75 0 01-.75.75zM10.75 12a.75.75 0 01.75-.75h1a.75.75 0 110 1.5h-1a.75.75 0 01-.75-.75zm-8 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm12 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm-8 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zm12 0a.75.75 0 01.75-.75h1a.75.75 0 010 1.5h-1a.75.75 0 01-.75-.75zM11.47 1.22a.75.75 0 011.06 0l3.25 3.25a.75.75 0 01-1.06 1.06L12 2.81 9.28 5.53a.75.75 0 01-1.06-1.06l3.25-3.25z"
			/>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M12 1.5a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0v-6A.75.75 0 0112 1.5z"
			/>
		</svg>
	))
);
export const XIcon = React.memo(
	React.forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={24}
			height={24}
			ref={ref}
			{...props}
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"
			/>
		</svg>
	))
);
