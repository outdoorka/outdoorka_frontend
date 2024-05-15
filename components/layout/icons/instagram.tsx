import React from "react";
import { Box, ListItemButton, ListItemText } from "@mui/material";
function Instagram() {
	return (
		<ListItemButton
			href="https://www.instagram.com/"
			target="_blank"
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
				src="icons/instagram.svg"
				alt="instagram"
			></Box>
			<ListItemText>instagram</ListItemText>
		</ListItemButton>
	);
}

export default Instagram;
