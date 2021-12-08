module.exports = {
	useSession: () => ({
		data: {
			expires: "1",
			user: {
				id: "0",
				email: "storybook@test-makepurple.com",
				name: "leedavidcs",
				image: "testuser.png"
			}	
		},
		status: "authenticated"
	}),
	signIn: () => undefined,
	signOut: () => undefined
};
