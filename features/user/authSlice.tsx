import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/plugins/api/axios";
import { getCookieObj, removeCookie, setCookie } from "@/utils/cookieHandler"
import { AuthState, ProfileItem, LoginForm } from "@/types/AuthType";

const profileName = "OUTDOORKA_USER";
const tokenName = "OUTDOORKA_TOKEN";
const { auth } = axios;

const authSlice: any = createSlice({
	name: "auth",
	initialState: {
		profile: getCookieObj(profileName),
		error: null
	} as AuthState,
	reducers: {
		logoutUser: (state: AuthState) => {
			state.profile = null;
			removeCookie(profileName);
			removeCookie(tokenName);
			// TODO: 倒轉到首頁
		},
	},
	extraReducers: (builder: any) => {
		const { pending, fulfilled, rejected } = loginUser;
		builder.addCase(pending, (state: AuthState) => {
			state.error = null;
		});
		builder.addCase(fulfilled, (state: AuthState, action: any) => {
			if (action.payload.error) {
				state.profile = null;
				removeCookie(profileName);
				removeCookie(tokenName);

			} else if (action.payload.data) {
				const { user, token } = action.payload.data;
				state.profile = user as ProfileItem;
				setCookie(profileName, JSON.stringify(user), 1);
				setCookie(tokenName, token.access_token, 1);
			}
		});
		builder.addCase(rejected, (state: AuthState, action: any) => {
			state.error = action.error;
		});
	},
});

export const { logoutUser } = authSlice.actions;
export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async (loginForm: LoginForm) => {
		const res = await auth.loginEndUser(loginForm);
		return res;
	},
);
export default authSlice.reducer;
