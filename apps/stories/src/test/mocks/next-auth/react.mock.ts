import * as client from "next-auth/react";

jest.mock("next-auth/react");

const mockSession = {
	expires: "1",
	user: {
		email: "storybook@test-makepurple.com",
		name: "leedavidcs",
		image: "testuser.png"
	}
};

(client.useSession as jest.Mock) = jest.fn().mockReturnValue({
	data: mockSession,
	status: "authenticated"
});
(client.signIn as jest.Mock) = jest.fn();
(client.signOut as jest.Mock) = jest.fn();
