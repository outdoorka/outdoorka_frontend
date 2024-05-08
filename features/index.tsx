import { configureStore } from "@reduxjs/toolkit";
import activityReducer from "./activity/activitySlice";
import { RootState } from "@/types";

// 創建一個函數來產生新的 store 實例，可以接受初始狀態
function initializeStore(initialState?: Partial<RootState>) {
	return configureStore({
		reducer: {
			activities: activityReducer,
		},
		preloadedState: initialState,
	});
}

export default initializeStore;
