import { configureStore } from "@reduxjs/toolkit";

import activityReducer from "./activity/activitySlice";
import authReducer from "./user/authSlice";

import { RootState } from "@/types";

// 創建一個函數來產生新的 store 實例，可以接受初始狀態
function initializeStore(initialState?: Partial<RootState>) {
	return configureStore({
		reducer: {
			activities: activityReducer,
			auth: authReducer,
		},
		preloadedState: initialState,
	});
}

export default initializeStore;
