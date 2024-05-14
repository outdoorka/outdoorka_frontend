import axios from "axios";
import { getCookie } from "cookies-next";

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL_USER,
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
	const status = error?.response?.status || "500";
	return {
		status: `${status}`,
		error: error.response.data.message || error.response.data.errorMessage,
	};
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onError);

export default instance;
