import instance from "./instance";
import activities from "@/api/activity";
import user from "@/api/user";
import auth from "@/api/auth";

export default {
	activities: activities(instance, "/posts"),
	user: user(instance, "/api/v1/users"),
	auth: auth(instance, "/api/v1"),
};
