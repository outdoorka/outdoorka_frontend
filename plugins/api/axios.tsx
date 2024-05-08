import instance from "./instance";
import activities from "@/api/activity";

export const URL = {
	outdoorkaDomain: "https://jsonplaceholder.typicode.com",
};

export default {
	activities: activities(instance, `${URL.outdoorkaDomain}/posts`),
};
