import Image from "next/image";
import NextLink from "next/link";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

import LogoHeader1 from "@/public/images/logoHeader_1.svg";

function OgHeader() {
	return (
		<Box sx={{ display: "flex" }}>
			<AppBar
				component="nav"
				sx={{
					color: "#4A4642",

					boxShadow: "none",
				}}
			>
				<Toolbar
					sx={{
						justifyContent: "space-between",
						py: 2,
						"& > *": {
							flex: "1 1 0",
						},
					}}
				>
					<Button component={NextLink} href="/">
						<Image
							src={LogoHeader1}
							width={100}
							height={48}
							alt="揪好咖"
							style={{
								transition: "0.3s",
								flexGrow: 1,
							}}
							priority={true}
						/>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default OgHeader;
