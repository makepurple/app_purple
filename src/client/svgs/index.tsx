import * as React from "react";
import type { Ref, SVGProps } from "react";
import type { InferComponentProps } from "@/client/types"

export type SvgIconComponent = typeof BoldIcon;
export type SvgIconComponentProps = InferComponentProps<SvgIconComponent>;

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
				fillRule="evenodd"
				d="M19.25 4.5H4.75a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h.19l9.823-9.823a1.75 1.75 0 012.475 0l2.262 2.262V4.75a.25.25 0 00-.25-.25zm.25 9.56l-3.323-3.323a.25.25 0 00-.354 0L7.061 19.5H19.25a.25.25 0 00.25-.25v-5.19zM4.75 3A1.75 1.75 0 003 4.75v14.5c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0021 19.25V4.75A1.75 1.75 0 0019.25 3H4.75zM8.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
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
				fillRule="evenodd"
				d="M10 4.75a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-3.514l-5.828 13h3.342a.75.75 0 010 1.5h-8.5a.75.75 0 010-1.5h3.514l5.828-13H10.75a.75.75 0 01-.75-.75z"
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
			<path d="M14.78 3.653a3.936 3.936 0 115.567 5.567l-3.627 3.627a3.936 3.936 0 01-5.88-.353.75.75 0 00-1.18.928 5.436 5.436 0 008.12.486l3.628-3.628a5.436 5.436 0 10-7.688-7.688l-3 3a.75.75 0 001.06 1.061l3-3z" />
			<path d="M7.28 11.153a3.936 3.936 0 015.88.353.75.75 0 001.18-.928 5.436 5.436 0 00-8.12-.486L2.592 13.72a5.436 5.436 0 107.688 7.688l3-3a.75.75 0 10-1.06-1.06l-3 3a3.936 3.936 0 01-5.567-5.568l3.627-3.627z" />
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
			<path d="M3.604 3.089A.75.75 0 014 3.75V8.5h.75a.75.75 0 010 1.5h-3a.75.75 0 110-1.5h.75V5.151l-.334.223a.75.75 0 01-.832-1.248l1.5-1a.75.75 0 01.77-.037zM8.75 5.5a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zm0 6a.75.75 0 000 1.5h11.5a.75.75 0 000-1.5H8.75zM5.5 15.75c0-.704-.271-1.286-.72-1.686a2.302 2.302 0 00-1.53-.564c-.535 0-1.094.178-1.53.565-.449.399-.72.982-.72 1.685a.75.75 0 001.5 0c0-.296.104-.464.217-.564A.805.805 0 013.25 15c.215 0 .406.072.533.185.113.101.217.268.217.565 0 .332-.069.48-.21.657-.092.113-.216.24-.403.419l-.147.14c-.152.144-.33.313-.52.504l-1.5 1.5a.75.75 0 00-.22.53v.25c0 .414.336.75.75.75H5A.75.75 0 005 19H3.31l.47-.47c.176-.176.333-.324.48-.465l.165-.156a5.98 5.98 0 00.536-.566c.358-.447.539-.925.539-1.593z" />
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
				d="M5 21h14v-2H5v2m7-4a6 6 0 0 0 6-6V3h-2.5v8a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 11V3H6v8a6 6 0 0 0 6 6z"
				fill="currentColor"
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

