import { ICreateActivity } from "@/types";

const organizerApi = (axios: any, event: any) => ({
	getActivity() {
		return axios.get(`${event}`);
	},
	createActivity(post: ICreateActivity) {
		return axios.post(`${event}/activities`, post);
	},
});

export default organizerApi;
