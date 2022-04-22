import { FC, MutableRefObject } from "react";
import GlobeTmp from "react-globe.gl";
import type { GlobeMethods, GlobeProps as GlobeTmpProps } from "react-globe.gl";

export type { GlobeMethods } from "react-globe.gl";

export type GlobeProps = Omit<GlobeTmpProps, "ref"> & {
	innerRef?: MutableRefObject<GlobeMethods | undefined>;
};

export const Globe: FC<GlobeProps> = ({ innerRef, ...props }) => {
	return <GlobeTmp {...props} ref={innerRef} />;
};

export default Globe;
