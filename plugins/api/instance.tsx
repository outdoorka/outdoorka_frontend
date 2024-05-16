import axios from "axios";
import { getCookie } from "cookies-next";
// console.log(process.env.FRONTEND_URL);
// console.log(process.env.NEXT_PUBLIC_BASE_URL_USER);

const instance = axios.create({
	// baseURL: process.env.NEXT_PUBLIC_BASE_URL_USER,
	headers: { "Content-Type": "application/json" },
});

const onRequest = (config: any) => {
	const token = getCookie("OUTDOORKA_TOKEN");
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
