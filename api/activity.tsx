const activity = (axios: any, event: any) => ({
	getActivityList() {
		return axios.get(`${event}`);
	},
});

export default activity;
