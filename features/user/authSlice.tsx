import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/plugins/api/axios";
import { deleteCookie, setCookie } from "cookies-next";

import { AuthState, ProfileItem, AuthItem, LoginForm } from "@/types/AuthType";
const { auth } = axios;

const authSlice: any = createSlice({
	name: "auth",
	initialState: {
		token: null,
		profile: null,
	} as AuthState,
	reducers: {
		logoutUser: (state: AuthState) => {
			state.token = null;
			state.profile = null;
			deleteCookie("OUTDOORKA_TOKEN");
		},
	},
	extraReducers: (builder: any) => {
		builder.addCase(loginUser.pending, (state: AuthState, action: any) => {
			// loading start
			state.token = null;
			state.profile = null;
		});
		builder.addCase(loginUser.rejected, (state: AuthState, action: any) => {
			console.log("rejected");
			console.log(state);
			state.token = null;
			state.profile = null;
		});
		builder.addCase(loginUser.fulfilled, (state: AuthState, action: any) => {
			// loading end
			if (action.payload.error) {
				state.token = null;
				state.profile = null;
				deleteCookie("OUTDOORKA_TOKEN");
			} else if (action.payload.data) {
				const { user, token } = action.payload.data;
				state.profile = user as ProfileItem;
				state.token = token as AuthItem;
				setCookie("OUTDOORKA_TOKEN", token.access_token, {
					maxAge: 60 * 60 * 24,
				});
			}
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
