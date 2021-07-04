import * as React from "react";

export const GitHubIcon = React.memo(
	React.forwardRef(
		(props: React.SVGProps<SVGSVGElement>, svgRef: React.ForwardedRef<SVGSVGElement>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 30 30"
				data-name="github icon"
				ref={svgRef}
				{...props}
			>
				<path
					d="M14.8 0a14.8 14.8 0 00-4.679 28.849c.739.137.978-.322.978-.712v-2.755c-4.118.9-4.975-1.747-4.975-1.747a3.921 3.921 0 00-1.644-2.166c-1.343-.919.1-.9.1-.9A3.107 3.107 0 016.854 22.1a3.151 3.151 0 004.308 1.23 3.141 3.141 0 01.94-1.979c-3.287-.376-6.744-1.646-6.744-7.316a5.729 5.729 0 011.525-3.973 5.324 5.324 0 01.144-3.918s1.243-.4 4.072 1.517a14.031 14.031 0 017.412 0c2.826-1.914 4.067-1.517 4.067-1.517a5.319 5.319 0 01.146 3.918 5.714 5.714 0 011.523 3.973c0 5.686-3.463 6.938-6.759 7.3a3.538 3.538 0 011.012 2.74v4.062c0 .394.237.856.988.711A14.806 14.806 0 0014.8 0z"
					data-name="github icon"
					fill="currentColor"
				/>
			</svg>
		)
	)
);

export const LinkedInIcon = React.memo(
	React.forwardRef(
		(props: React.SVGProps<SVGSVGElement>, svgRef: React.ForwardedRef<SVGSVGElement>) => (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={50}
				height={50}
				viewBox="0 0 50 50"
				ref={svgRef}
				{...props}
			>
				<path
					d="M25 0a25 25 0 1025 25A25 25 0 0025 0zm-7.265 37.793h-6.088V19.475h6.089zm-3.044-20.819h-.04a3.173 3.173 0 11.08-6.329 3.175 3.175 0 11-.04 6.329zm25 20.819H33.6v-9.8c0-2.463-.882-4.142-3.085-4.142a3.333 3.333 0 00-3.124 2.227 4.17 4.17 0 00-.2 1.486v10.229H21.1s.08-16.6 0-18.318h6.088v2.594a6.045 6.045 0 015.487-3.024c4.006 0 7.01 2.618 7.01 8.244zm0 0"
					data-name="linkedin icon"
					fill="currentColor"
				/>
			</svg>
		)
	)
);

