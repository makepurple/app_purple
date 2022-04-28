import { withForwardRef } from "@makepurple/components";
import { ParentSize } from "@visx/responsive";
import ms from "ms";
import dynamic from "next/dynamic";
import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { MeshLambertMaterial } from "three";
import { feature } from "topojson-client";
import tw from "twin.macro";
import type { GlobeMethods } from "./Globe";
import landData from "./land-data.json";

const GlobeTmp = dynamic(() => import("./Globe"), { ssr: false });

const Globe = withForwardRef(GlobeTmp);

const DEFAULT_ALTITUDE = 0.02;
const HOVER_ALTITUDE = 0.085;

const Root = tw.div`
	flex
	items-center
	justify-center
`;

const StyledParentSize = tw(ParentSize)`
	flex
	items-center
	justify-center
`;

export interface HomePageGlobeProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageGlobe: FC<HomePageGlobeProps> = ({ className, style }) => {
	const [globe, globeRef] = useState<GlobeMethods | null>(null);

	const [altitude, setAltitude] = useState<number>(0.02);
	const [landPolygons, setLandPolygons] = useState<any[]>([]);
	const globeMaterial = useRef(new MeshLambertMaterial({ color: "#e2e8f0" }));

	useEffect(() => {
		if (!globe) return;

		(globe.controls() as any).autoRotate = true;
		(globe.controls() as any).autoRotateSpeed = 0.85;
		(globe.controls() as any).enableZoom = false;
		globe.pointOfView({ altitude: 2 });
	}, [globe]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		setLandPolygons((feature(landData as any, landData.objects.land as any) as any).features);
	}, []);

	return (
		<Root
			className={className}
			onMouseOut={() => {
				setAltitude(DEFAULT_ALTITUDE);
			}}
			style={style}
		>
			<StyledParentSize>
				{({ height, width }) => (
					<Globe
						ref={globeRef}
						animateIn={false}
						backgroundColor="rgba(0, 0, 0, 0.0)"
						globeMaterial={globeMaterial.current}
						height={height}
						onPolygonHover={(polygon) => {
							setAltitude(() => (polygon ? HOVER_ALTITUDE : DEFAULT_ALTITUDE));
						}}
						polygonAltitude={altitude}
						polygonCapColor={() => "rgba(55, 48, 163, 0.85)"}
						// polygonCapMaterial={landMaterial.current}
						polygonsData={landPolygons}
						polygonSideColor={() => "rgba(0, 0, 0, 0.05)"}
						polygonsTransitionDuration={ms("1.5s")}
						showAtmosphere={false}
						width={width}
					/>
				)}
			</StyledParentSize>
		</Root>
	);
};
