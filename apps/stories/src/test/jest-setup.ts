/* eslint-disable @typescript-eslint/no-unsafe-call */
// Global setup for Jest, will run once per test file
import { prisma } from "@makepurple/server/src/db";
import preloadAll from "jest-next-dynamic";
import "jest-styled-components";
import "mutationobserver-shim";

beforeAll(async () => {
	await preloadAll();
});

beforeEach(async () => {
	return Promise.resolve(undefined);
});

afterAll(async () => {
	// Disconnect Prisma from the database after all tests are complete
	// to avoid open handles stopping Jest from exiting
	await prisma.$disconnect();
});
