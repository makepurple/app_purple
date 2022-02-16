module.exports = {
	useSession: () => ({
		data: {
			expires: "1",
			user: {
				id: "0",
				email: "storybook@test-makepurple.com",
				name: "leedavidcs",
				image: "https://avatars.githubusercontent.com/u/15151154"
			}	
		},
		status: "authenticated"
	}),
	signIn: () => undefined,
	signOut: () => undefined
};
