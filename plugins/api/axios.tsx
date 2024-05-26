import instance from "./instance";
import activities from "@/api/activity";
import user from "@/api/user";
import auth from "@/api/auth";

// export const URL = {
// 	OUTDOORKA_URL:
// 		process.env.NEXT_PUBLIC_BASE_URL_USER || "http://localhost:3006",
// };

export default {
	activity: activities(instance, "/api/v1/activity"),
	user: user(instance, "/api/v1/users"),
	auth: auth(instance, "/api/v1"),
};
