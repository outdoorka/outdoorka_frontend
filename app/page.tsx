import React from "react";

import MainLayout from "@/components/layout/MainLayout/MainLayout";
import { Box, Unstable_Grid2 as Grid, Typography, Link } from "@mui/material";

function Home() {
	return (
		<MainLayout>
			<Grid container justifyContent="center">
				<Grid xs={12}>
					<Box sx={{ height: "80vh", backgroundColor: "#F8F9FF" }}>banner</Box>
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
					<Box py={10}>
						<Typography
							variant="h3"
							sx={{ color: "#00497D", fontSize: 56, textAlign: "center" }}
						>
							活動探索
						</Typography>
						<Box my={6} maxWidth={1280} sx={{ display: "flex", flexDirection: "column" }}>
							<Box
								mb={3}
								textAlign="center"
								sx={{
									py: "60px",
									backgroundImage: "url('/images/Freediving.jpeg')",
									backgroundPosition: "center",
									backgroundSize: "cover",
									borderRadius: "25px",
								}}
							>
								<Link href="/">
									<Box mb={1} color="#FFFFFF" fontSize="28px">
										自由潛水
									</Box>
									<Box color="#FFFFFF" fontSize="20px">
										Freediving
									</Box>
								</Link>
							</Box>
							<Box
								mb={3}
								textAlign="center"
								sx={{
									py: "60px",
									backgroundImage: "url('/images/Hiking.jpeg')",
									backgroundPosition: "center",
									backgroundSize: "cover",
									borderRadius: "25px",
								}}
							>
								<Link href="/">
									<Box mb={1} color="#FFFFFF" fontSize="28px">健行</Box>
									<Box color="#FFFFFF" fontSize="20px">Hiking</Box>
								</Link>
							</Box>
							<Box
								mb={3}
								textAlign="center"
								sx={{
									py: "60px",
									backgroundImage: "url('/images/Badminton.jpeg')",
									backgroundPosition: "center",
									backgroundSize: "cover",
									borderRadius: "25px",
								}}
							>
								<Link href="/">
									<Box mb={1} color="#FFFFFF" fontSize="28px">羽球</Box>
									<Box color="#FFFFFF" fontSize="20px">Badminton</Box>
								</Link>
							</Box>
							<Box
								mb={3}
								textAlign="center"
								sx={{
									py: "60px",
									backgroundImage: "url('/images/Sup.jpeg')",
									backgroundPosition: "center",
									backgroundSize: "cover",
									borderRadius: "25px",
								}}
							>
								<Link href="/">
									<Box mb={1} color="#FFFFFF" fontSize="28px">立獎</Box>
									<Box color="#FFFFFF" fontSize="20px">SIP</Box>
								</Link>
							</Box>
						</Box>
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
