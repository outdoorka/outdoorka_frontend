const activity = (axios: any, event: any) => ({
	getHotActivityList() {
		return axios.get(`${event}/homelist?type=HOT`);
	},
	getNewActivityList() {
		return axios.get(`${event}/homelist?type=NEW`);
	},
});

export default activity;
