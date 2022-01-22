import Pusher from "pusher-js";
import { useMemo } from "react";
import { getPusher } from "../services";

export const usePusher = (): Pusher => {
	return useMemo(() => getPusher(), []);
};
