import React from "react";
import { Box, ListItemButton, ListItemText } from "@mui/material";

function Facebook() {
	return (
		<ListItemButton
			sx={{
				paddingTop: 0.5,
				paddingBottom: 0.5,
				marginBottom: 2,
				marginRight: 1,
				backgroundColor: "#22252A",
				borderRadius: "10px",
			}}
		>
			<Box
				component="img"
				marginRight={0.5}
				src="icons/facebook.svg"
				alt="facebook"
			></Box>
			<ListItemText>facebook</ListItemText>
		</ListItemButton>
	);
}

export default Facebook;
