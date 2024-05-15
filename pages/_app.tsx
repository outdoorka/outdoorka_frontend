import { useMemo } from "react";
import { Provider } from "react-redux";
import initializeStore from "@/features/index";

/**
 * 自定義 App 元件，它封裝了所有的頁面元件，用於初始化頁面。
 * @param {Object} props - 包含 Component 和 pageProps 的屬性物件
 * @param {React.Component} props.Component - 當前活動頁面的元件
 * @param {Object} props.pageProps - 傳遞給當前頁面元件的屬性
 */

function App({ Component, pageProps }: any) {
	// 使用 useMemo 來創建或獲取緩存的 Redux store 實例
	// 依賴項 pageProps.initialReduxState 表明當此狀態變化時，重新計算 store
	const store = useMemo(
		() => initializeStore(pageProps.initialReduxState),
		[pageProps.initialReduxState],
	);

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default App;
