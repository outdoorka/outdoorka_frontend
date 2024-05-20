import Cookies from "js-cookie";

export const setCookie = (name: string, value: any, days: number) => {
	Cookies.set(name, value, {
		expires: days,
	});
};

export const getCookieObj = (name: string) => {
	const string = Cookies.get(name);
	if (!string) return null;
	if (typeof string === "string") return JSON.parse(string);
	return string;
};

export const removeCookie = (name: string) => Cookies.remove(name);
