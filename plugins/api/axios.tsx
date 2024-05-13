import instance from "./instance";
import activities from "@/api/activity";
import user from "@/api/user";

export const URL = {
	OUTDOORKA_URL: process.env.FRONTEND_URL || "http://localhost:3006",
};

export default {
	activities: activities(instance, `https://jsonplaceholder.typicode.com/posts`),
	user: user(instance, `${URL.OUTDOORKA_URL}/api/v1/users`),
};
