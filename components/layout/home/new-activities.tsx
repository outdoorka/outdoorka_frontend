"use client";
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import CardActivity from "@/components/ui/shared/card-activity";

function NewActivities() {
	return (
		<Container maxWidth="xl">
			<Box
				sx={{
					background:
						"linear-gradient(180deg, rgba(196, 221, 255, 0.18) 0%, #C4DDFF 100%)",
					height: "816px",
					padding: "24px 0px 120px 0px",
					borderRadius: "48px",
				}}
			>
				<Typography
					component="h2"
					sx={{
						fontSize: "56px",
						fontWeight: "700",
						lineHeight: "64px",
						textAlign: "center",
						letterSpacing: "-0.25px",
						margin: "48px 0",
					}}
				>
					最新活動
				</Typography>

				<Grid sx={{ flexGrow: 1 }} container spacing={2}>
					<Grid item xs={12}>
						<Grid container justifyContent="center" wrap="nowrap" spacing={2}>
							{[0, 1, 2, 3, 4, 5].map((value) => (
								<CardActivity
									key={value}
									type="sm"
									activity={{
										title: "【台北縱走大挑戰】第一段:關渡--陽明山二子坪999",
										location: "台北市 士林區",
										date: "2024/03/23",
										photo:
											"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
										avatar: "https://thispersondoesnotexist.com",
										name: "Andy D Schwarzenegger",
										capacity: 0,
										likers: 999,
										rating: 2,
									}}
								/>
							))}
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

export default NewActivities;
