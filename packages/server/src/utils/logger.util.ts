import { createLogger, transports } from "winston";

export const Logger = createLogger({
	silent: process.env.NODE_ENV !== "development",
	transports: [new transports.Console()]
});
