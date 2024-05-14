import { LoginForm } from "@/types/AuthType";
export default (axios: any, event: any) => ({
	loginEndUser(post: LoginForm) {
		return axios.post(`${event}/login`, {
			email: post.account,
			password: post.password,
		});
	},
});
