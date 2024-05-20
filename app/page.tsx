import React from "react";
import MainLayout from "@/components/layout/MainLayout/MainLayout";
import { Container, Box, Unstable_Grid2 as Grid } from "@mui/material";

import Header from "@/components/layout/Header/Header";

function Home() {
	return (
		<MainLayout>
			<Container>
				<Box
					component="div"
					sx={{
						height: "100vh",
						paddingTop: 12,
						wordWrap: "break-word",
					}}
				>
					<Grid container spacing={2} justifyContent="center">
						<Grid xs={12}>
							<Box sx={{ height: "80vh", backgroundColor: "#F8F9FF" }}>
								banner
							</Box>
						</Grid>
						<Grid xs={12}>
							<Box sx={{ height: "100vh", backgroundColor: "#F8F9FF" }}>
								熱門活動
							</Box>
						</Grid>
						<Grid xs={12}>
							<Box sx={{ height: "50vh", backgroundColor: "#F8F9FF" }}>
								最新活動
							</Box>
						</Grid>
						<Grid xs={10}>
							<Box sx={{ height: "80vh", backgroundColor: "#F8F9FF" }}>
								活動探索
							</Box>
						</Grid>
						<Grid xs={12}>
							<Box sx={{ height: 400, backgroundColor: "#F8F9FF" }}>
								優質主揪
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</MainLayout>
	);
}

export default Home;
