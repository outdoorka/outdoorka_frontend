export default (axios: any, event: any) => ({
	getActivityList() {
		return axios.get(`${event}`);
	},
});
