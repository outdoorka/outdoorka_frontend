import React from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";

function Home() {
	return (
		<MainLayout>
			<Grid container justifyContent="center">
				<Grid xs={12}>
					<Box sx={{height: "80vh",backgroundColor: "#F8F9FF"}}>banner</Box>
				</Grid>
				<Grid xs={12}>
					<Box sx={{height: "100vh",backgroundColor: "#F8F9FF"}}>熱門活動</Box>
				</Grid>
				<Grid xs={12}>
					<Box sx={{height: "50vh",backgroundColor: "#F8F9FF"}}>最新活動</Box>
				</Grid>
				<Grid xs={10} >
					<Box sx={{height: "80vh",backgroundColor: "#F8F9FF"}}>活動探索</Box>
				</Grid>
				<Grid xs={12}>
					<Box sx={{height: 400,backgroundColor: "#F8F9FF"}}>優質主揪</Box>
				</Grid>
			</Grid>
		</MainLayout>
	);
}

export default Home;
