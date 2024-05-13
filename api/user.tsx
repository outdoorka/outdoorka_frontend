export default (axios: any, event: any) => ({
	getUser(id: string) {
		console.log("event", id);
		return axios.get(`${event}/${id}`);
	},
	updateUser(id: string, post: any) {
		return axios.patch(`${event}/${id}`, post);
	},
	updateUserEmail(id: string, post: any) {
		return axios.patch(`${event}/${id}/email`, post);
	},
	updateUserPassword(id: string, post: any) {
		return axios.patch(`${event}/${id}/password`, post);
	},
	registerUser(post: {
		name:string
		pwd:string
		account:string
		mobile:string
	}) {
		return axios.post(`${event}`, {
			name: post.name,
			mobile: post.mobile,
			email: post.account,
			password: post.pwd
		})
	}
});
