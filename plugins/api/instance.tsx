import axios from "axios";
import { tokenName, getCookie } from "@/utils/cookieHandler";

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL_USER || "http://localhost:3006",
	headers: { "Content-Type": "application/json" },
});

const onRequest = (config: any) => {
	const token = getCookie(tokenName);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
};

const onResponse = (response: any) => {
	const { status } = response;

	if (status >= 200 && status <= 299) {
		return response.data;
	}

	return response;
};

const onError = (error: any) => {
	const { response } = error;

	if (response) {
		return {
			status: `${response.status || 500}`,
			error:
				response.data?.message || response.data?.errorMessage || "服務異常",
		};
	} else {
		return {
			status: 500,
			error: "服務異常",
		};
	}
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onError);

export default instance;
