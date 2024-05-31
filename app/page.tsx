import React from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import HotActivities from "@/components/layout/home/HotActivities";
import NewActivities from "@/components/layout/home/NewActivities";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function Home() {
	return (
		<MainLayout>
			<Grid container justifyContent="center">
				<Grid xs={12}>
					<Box sx={{ height: "80vh", backgroundColor: "#F8F9FF" }}>banner</Box>
				</Grid>
				<Grid xs={12} sx={{ maxWidth: "1536px" }}>
					<HotActivities />
				</Grid>
				<Grid xs={12}>
					<NewActivities />
				</Grid>
				<Grid xs={10}>
					<Box sx={{ height: "80vh", backgroundColor: "#F8F9FF" }}>
						活動探索
					</Box>
				</Grid>
				<Grid xs={12}>
					<Box sx={{ height: 400, backgroundColor: "#F8F9FF" }}>優質主揪</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
}

export default Home;
