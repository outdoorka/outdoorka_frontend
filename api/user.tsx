const userApi = (axios: any, event: any) => ({
	getUser() {
		return axios.get(`${event}`);
	},
	updateUser(id: string, post: any) {
		return axios.patch(`${event}`, post);
	},
	updateUserEmail(id: string, post: any) {
		return axios.patch(`${event}/email`, post);
	},
	updateUserPassword(id: string, post: any) {
		return axios.patch(`${event}/password`, post);
	},
});

export default userApi;
