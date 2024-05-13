import instance from "./instance";
import activities from "@/api/activity";
import user from "@/api/user";
import auth from "@/api/auth";

export const URL = {
	outdoorkaDomain: "http://localhost:3006",
};

export default {
	activities: activities(instance, `${URL.outdoorkaDomain}/posts`),
	user: user(instance, `${URL.outdoorkaDomain}/api/v1/users`),
	auth: auth(instance, `${URL.outdoorkaDomain}/api/v1`),
};