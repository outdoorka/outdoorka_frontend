"use client";
import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationIcon from "../../icon/locationIcon";
import StarFullIcon from "../../icon/starFullIcon";
import StarEmptyIcon from "../../icon/starEmptyIcon";

type Activity = {
	title: string;
	location: string;
	date: string;
	photo: string;
	avatar: string;
	name: string;
	likers: number;
	rating: number;
};

interface CardActivityProps {
	activity: Activity;
}

const RatingStars = ({ rating = 0 }: { rating: number }) => (
	<Box sx={{ height: "16px" }}>
		{Array.from({ length: rating }, (_, i) => (
			<StarFullIcon
				key={`start-full-${i}`}
				sx={{
					marginRight: "1px",
					width: "12px",
					height: "12px",
				}}
				color="action"
			/>
		))}
		{Array.from({ length: 5 - rating }, (_, i) => (
			<StarEmptyIcon
				key={`start-${i}`}
				sx={{
					marginRight: "1px",
					width: "12px",
					height: "12px",
				}}
				color="action"
			/>
		))}
	</Box>
);

function CardActivity({ activity }: CardActivityProps) {
	return (
		<Grid item>
			<Paper
				sx={{
					width: 272,
					height: 392,
					backgroundColor: "#fff",
					borderRadius: "24px",
				}}
			>
				{/* 上方 區塊 */}
				<Box sx={{ position: "relative" }}>
					{/* 底圖 */}
					<Box
						component="img"
						src={activity.photo}
						sx={{
							width: "100%",
							height: "181px",
							objectFit: "cover",
							borderTopLeftRadius: "24px",
							borderTopRightRadius: "24px",
						}}
					></Box>
					{/* 主揪資訊 */}
					<Grid
						sx={{
							position: "absolute",
							bottom: "8px",
							width: "100%",
							padding: "0 4px",
						}}
						container
						wrap="nowrap"
						justifyContent="space-around"
						alignItems="flex-end"
					>
						<Grid item>
							<Box
								sx={{
									width: "155px",
									height: "40px",
									padding: "4px 8px 4px 4px",
									border: "1px solid #FFFFFFCC",
									borderRadius: "800px",
								}}
							>
								<Box
									component="img"
									src={activity.avatar}
									sx={{
										width: "32px",
										height: "32px",
										objectFit: "cover",
										borderRadius: "100%",
										marginRight: "8px",
									}}
								/>

								<Box
									sx={{
										display: "inline-block",
										width: "100px",
										height: "32px",
										lineHeight: "16px",
									}}
								>
									{/* 星星評分 */}
									<RatingStars rating={activity.rating} />

									{/* 主揪名稱 */}
									<Box
										sx={{
											textOverflow: "ellipsis",
											overflow: "hidden",
											whiteSpace: "nowrap",
											fontSize: "14px",
											lineHeight: "16px",
											fontWeight: "400",
											letterSpacing: "0.5px",
											color: "#F8F9FF",
										}}
									>
										{activity.name}
									</Box>
								</Box>
							</Box>
						</Grid>

						<Grid item>
							<Box
								sx={{
									width: "93px",
									height: "36px",
									padding: "6px 16px 6px 16px",
									border: "1px solid #FFFFFFCC",
									borderRadius: "800px",
								}}
							>
								<FavoriteIcon
									sx={{
										marginRight: "2px",
										width: "24px",
										height: "24px",
										color: "#F8F9FF",
									}}
								/>
								<Box
									sx={{
										display: "inline-block",
										fontSize: "16px",
										fontWeight: "500",
										lineHeight: "26px",
										verticalAlign: "top",
										letterSpacing: "0.5px",
										color: "#F8F9FF",
									}}
								>
									{activity.likers}
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>

				{/* Info 區塊 */}
				<Box sx={{ padding: "28px" }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "end",
							lineHeight: "24px",
							letterSpacing: "0.25px",
						}}
					>
						<LocationIcon sx={{ marginRight: "12px" }} color="action" />
						<span>{activity.location}</span>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "end",
							lineHeight: "24px",
							letterSpacing: "0.25px",
						}}
					>
						<CalendarTodayIcon
							sx={{
								marginRight: "12px",
								marginTop: "8px",
							}}
							color="action"
						/>
						<span>{activity.date}</span>
					</Box>
					<Typography
						sx={{
							marginTop: "16px",
							fontWeight: "700",
							lineHeight: "30px",
						}}
						variant="h6"
					>
						{activity.title}
					</Typography>
				</Box>
			</Paper>
		</Grid>
	);
}

export default CardActivity;
