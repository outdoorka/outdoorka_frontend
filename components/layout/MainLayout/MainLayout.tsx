import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { MainLayoutProps } from "@/types/index";

function MainLayout({ children }: MainLayoutProps) {
	return (
		<Box>
			<Header />
			<Box component="main">{children}</Box>
			<Footer />
		</Box>
	);
}

export default MainLayout;
