export interface RegisterForm {
	email: string;
	password: string;
	confirm?: string;
	name: string;
	mobile: string;
}

export interface LoginForm {
	account: string;
	password: string;
}

export interface AuthItem {
	access_token: string;
	refresh_token: string;
}

export interface ProfileItem {
	email: string;
	name: string;
}
export interface AuthState {
	token: AuthItem | null;
	profile: ProfileItem | null;
}
