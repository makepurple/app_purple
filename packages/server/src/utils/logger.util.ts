import Winston, { createLogger, transports } from "winston";

export const Logger: Winston.Logger = createLogger({
	silent: process.env.NODE_ENV !== "development",
	transports: [new transports.Console()]
});
