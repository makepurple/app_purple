module.exports = {
	useSession: () => ({
		data: {
			expires: "1",
			user: {
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
