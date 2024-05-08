import axios from "axios";

const instance = axios.create();

const onRequest = (config: any) => {
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

	return { status: `${status} - failure`, error: error.response.data };
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onError);

export default instance;
