"use client";

import { Typography } from "@mui/material";

const TitleSection = ({ title }: { title: string }) => {
	return (
		<Typography
			component="h2"
			sx={{
				fontSize: "56px",
				fontWeight: "700",
				lineHeight: "64px",
				textAlign: "center",
				letterSpacing: "-0.25px",
				margin: "48px 0",
				color: "#00497D",
			}}
		>
			{title}
		</Typography>
	);
};

export default TitleSection;
