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
});
