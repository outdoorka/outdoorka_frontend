"use client";

import React from "react";
import dayjs from "dayjs";
import { Box, Typography, Grid, Paper } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationIcon from "@/components/icon/locationIcon";
import StarFullIcon from "@/components/icon/starFullIcon";
import StarEmptyIcon from "@/components/icon/starEmptyIcon";
import PeopleIcon from "@/components/icon/peopleIcon";

type Activity = {
	title: string;
	location: string;
	date: string;
	photo: string;
	avatar: string;
	name: string;
	capacity?: number;
	likers: number;
	rating: number;
};

interface CardActivityProps {
	type?: "sm" | "lg";
	activity: Activity;
}

const RatingStars = ({ rating = 0 }: { rating: number }) => (
	<Box sx={{ height: "16px" }}>
		{Array.from({ length: rating }, (_, i) => (
			<StarFullIcon
				key={`start-full-${i}`}
				sx={{
					marginRight: "3px",
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

function CardActivity({ activity, type = "sm" }: CardActivityProps) {
	const parseDate = () => {
		return dayjs(activity.date).format("YYYY/YY/DD")
	}
	// const parseRate = () => {
	// 	const rating = Number(activity.rating)*10;
	// 	const roundedRating = Math.round(rating/2);
	// 	return roundedRating;
	// }
	return (
		<Paper
			sx={{
				width: type === "lg" ? 366 : 272,
				height: type === "lg" ? 436 : 392,
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
						height: type === "lg" ? "244px" : "181px",
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
					{/* 主揪 */}
					<Grid item>
						<Box
							sx={{
								display: "inline-flex",
								width: `${type === "lg" ? "159px" : "155px"}`,
								height: "40px",
								padding: "4px 6px 4px 4px",
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
									marginRight: "7px",
								}}
							/>

							<Box
								sx={{
									width: type === "lg" ? "106px" : "103px",
									height: "32px",
									lineHeight: "16px",
								}}
							>
								{/* 星星評分 */}
								<RatingStars rating={activity.rating} />

								{/* 主揪名稱 */}
								<Typography
									variant="p"
									sx={{
										display: "inline-block",
										overflow: "hidden",
										maxWidth: "7.5em",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
										fontSize: "14px",
										lineHeight: "16px",
										fontWeight: "400",
										letterSpacing: "0.5px",
										color: "#F8F9FF",
									}}
								>
									{activity.name}
								</Typography>
							</Box>
						</Box>
					</Grid>

					{/* 人數 */}
					{type === "lg" && (
						<Grid item>
							<Box
								sx={{
									width: "83px",
									height: "36px",
									padding: "6px 12px 6px 12px",
									border: "1px solid #FFFFFFCC",
									borderRadius: "800px",
								}}
							>
								<PeopleIcon
									sx={{
										marginRight: "8px",
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
									{activity.capacity || 0}
								</Box>
							</Box>
						</Grid>
					)}

					{/* 愛心數 */}
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
			<Box sx={{ padding: type === "lg" ? "20px 32px 20px 32px" : "28px" }}>
				<Box
					sx={{
						display: "flex",
						alignItems: "end",
						lineHeight: "24px",
						letterSpacing: "0.25px",
						color: "#B1AAA5",
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
						color: "#B1AAA5",
					}}
				>
					<CalendarTodayIcon
						sx={{
							marginRight: "12px",
							marginTop: "8px",
						}}
						color="action"
					/>
					<span>{parseDate()}</span>
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
	);
}

export default CardActivity;
