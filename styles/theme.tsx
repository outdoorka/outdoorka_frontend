"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 800,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: "Noto Sans TC, sans-serif",
		fontSize: 16,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});

export default theme;
