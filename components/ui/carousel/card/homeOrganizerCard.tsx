"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Stack,
	Typography,
	styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

function HomeOrganizerCard() {
	const theme = useTheme();

	return (
		<Box sx={{ width: 366, display: "flex", flexDirection: "column", gap: 1 }}>
			<Card
				variant="outlined"
				sx={{
					minWidth: 275,
					border: 2,
					borderRadius: "6px",
					borderColor: "#DFE2EB",
					display: "flex",
					flexDirection: "column",
					gap: "16px",
					padding: "24px 12px 0px",
				}}
			>
				<CardMedia
					component="img"
					sx={{
						border: 1,
						borderRadius: "4px",
						borderColor: "#DFE2EB",
					}}
					alt={testData.image}
					width="342"
					height="342"
					image={testData.image}
				/>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
						padding: 0,
					}}
				>
					<CustomTypography
						variant="h5"
						color={theme.palette.secondary.main}
						align="center"
						gutterBottom
						sx={{ margin: 0 }}
					>
						{testData.title}
					</CustomTypography>
					<Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
						{testData.chips.map((el, i) => (
							<Chip
								key={i}
								label={el}
								variant="outlined"
								size="small"
								sx={{
									color: theme.palette.secondary.main,
									borderRadius: "8px",
									borderColor: theme.palette.secondary.main,
								}}
							/>
						))}
					</Stack>
				</CardContent>
			</Card>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					gap: "4px",
				}}
			>
				<Typography
					component="h6"
					sx={{ size: 2, color: theme.palette.text.primary, fontWeight: 500 }}
				>
					{testData.organizer}
				</Typography>
				<Stars />
			</Box>
		</Box>
	);
}

// TODO
const Stars = () => {
	const theme = useTheme();

	return (
		<Stack direction="row" spacing="2px" sx={{ justifyContent: "center" }}>
			{stars.map((_, i) => (
				<FontAwesomeIcon
					key={i}
					icon={faStar}
					size="xs"
					color={theme.palette.secondary.main}
				/>
			))}
		</Stack>
	);
};

const CustomTypography = styled(Typography)({
	"@font-face": {
		fontFamily: "ChenYuluoyan-Thin",
		src: `url('/fonts/ChenYuluoyan-Thin.ttf') format('truetype')`,
	},
	fontFamily: "ChenYuluoyan-Thin",
});
const stars = Array(5).fill(null);

const testData = {
	title: "複寫呢喃，為你成篇",
	organizer: "Andy D schwarzenegger",
	chips: ["水肺", "衝浪", "越野跑"],
	image:
		"https://s3-alpha-sig.figma.com/img/da08/3fb0/d6bc157bc381d454ba6ec967999440fc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qq6z~z1YE7R88O0YzLj49WN9AIgRhhsQN2VYpP8A1qcvZvubHkjuEsFwWDn9rUctDMJbz8bcaKHTZXtPuNduo3zoUsv8450Q4UweVqST30eHngZZGbZmsLMfEFd9uWqmFMma8bzpo~4UFJxK8ncWcowMaXYwkTVjMLnajjY5ekR9MaVqVjW7FH5WhbOipq5DTjrKCGut36zMH2ag5uMgMmk1rYnpI8ugpzIi5-tXl~vsV4IHu9kBnLU37SQ95YcG3n0D0vcjnsIkzBPTm2xySh6u2bcwlcTMvz5GTuyFqGobPm0J911hE89FBzt5ztc1xswTsx-iTfE8MiAspCN57g__",
};

export default HomeOrganizerCard;
