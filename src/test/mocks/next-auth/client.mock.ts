import client from "next-auth/client";

jest.mock("next-auth/client");

const mockSession = {
	expires: "1",
	user: { email: "storybook@test-makepurple.com", name: "Storybook", image: "testuser.png" }
};

(client.useSession as jest.Mock) = jest.fn().mockReturnValue([mockSession, false]);
(client.signIn as jest.Mock) = jest.fn();
(client.signOut as jest.Mock) = jest.fn();
