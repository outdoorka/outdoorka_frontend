export default (axios: any, event: any) => ({
	loginUser(post: {
		pwd:string
		account:string
	}) {
		console.log(`${event}/users/login`);
		console.log(post);
		return axios.post(`${event}/login`, {
			email: post.account,
			password: post.pwd
		})
	},
});
