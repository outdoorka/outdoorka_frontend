import {
	LoginForm,
	LoginOrganizerForm,
	RegisterForm,
	RegisterOgForm,
} from "@/types/AuthType";

const auth = (axios: any, event: any) => ({
	registerEndUser(post: RegisterForm) {
		return axios.post(`${event}/register`, post);
	},
	loginEndUser(post: LoginForm) {
		return axios.post(`${event}/login`, {
			email: post.account,
			password: post.password,
		});
	},
	loginOrganizer(post: LoginOrganizerForm) {
		return axios.post(`${event}/organizer/login`, {
			email: post.email,
			password: post.password,
		});
	},
	registerOrganizer(post: RegisterOgForm) {
		return axios.post(`${event}/organizer/register`, post);
	},
	forgotPassword(post: { email: string }) {
		return axios.post(`${event}/organizer/forget`, post);
	},
	resetPassword(post: { password: string; token: string }) {
		return axios.post(`${event}/organizer/forget/confirm`, post);
	},
});

export default auth;
