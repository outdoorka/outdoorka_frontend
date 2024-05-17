import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/plugins/api/axios";
import { deleteCookie, setCookie } from "cookies-next";

import {
	AuthItem,
	LoginOrganizerForm,
	ProfileOgItem,
	OgAuthState,
} from "@/types/AuthType";

const { auth } = axios;
const COOKIE_OG_TOKEN = "OUTDOORKA_OG_TOKEN";

const ogAuthSlice: any = createSlice({
	name: "ogAuth",
	initialState: {
		token: null,
		profile: null,
	} as OgAuthState,
	reducers: {
		logoutOrganizer: (state: OgAuthState) => {
			state.token = null;
			state.profile = null;
			deleteCookie(COOKIE_OG_TOKEN);
		},
	},
	extraReducers: (builder: any) => {
		builder.addCase(loginOrganizer.pending, (state: OgAuthState) => {
			// loading start
			state.token = null;
			state.profile = null;
		});
		builder.addCase(loginOrganizer.rejected, (state: OgAuthState) => {
			state.token = null;
			state.profile = null;
		});
		builder.addCase(
			loginOrganizer.fulfilled,
			(state: OgAuthState, action: any) => {
				// loading end
				if (action.payload.error) {
					state.token = null;
					state.profile = null;
					deleteCookie(COOKIE_OG_TOKEN);
				} else if (action.payload.data) {
					const { organizer, token } = action.payload.data;
					state.profile = organizer as ProfileOgItem;
					state.token = token as AuthItem;
					setCookie(COOKIE_OG_TOKEN, token.access_token, {
						maxAge: 60 * 60 * 24,
					});
				}
			},
		);
	},
});

export const { logoutOrganizer } = ogAuthSlice.actions;
export const loginOrganizer = createAsyncThunk(
	"ogAuth/loginOrganizer",
	async (loginForm: LoginOrganizerForm) => {
		const res = await auth.loginOrganizer(loginForm);
		return res;
	},
);
export default ogAuthSlice.reducer;
