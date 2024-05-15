import React from "react";

import {
	AppBar,
	Box,
	Link,
	Typography,
	Avatar,
	IconButton,
	Badge,
	Button,
	Toolbar,
} from "@mui/material";

const linkTiltes = [
	{
		title: "關於我們",
		link: "#",
	},
	{
		title: "活動",
		link: "#",
	},
	{
		title: "優良主揪",
		link: "#",
	},
	{
		title: "Blog",
		link: "#",
	},
	{
		title: "短影音",
		link: "#",
	},
];

function Header() {
	return (
		<div>
			<AppBar position="sticky" color="inherit">
				<Toolbar sx={{ backgroundColor: "#FDFCFF", padding: 2 }}>
					{linkTiltes.map((item, index) => (
						<Link
							color="inherit"
							fontSize="inherit"
							noWrap
							key={index}
							// variant="body2"
							href={item.link}
							underline="hover"
							sx={{
								padding: 1,
								marginRight: 3,
								flexShrink: 0,
								textDecoration: "none",

								// text-decoration:"none";
							}}
							// className={classes.toolbarLink}
						>
							{item.title}
						</Link>
					))}
					<Typography
						component="h2"
						variant="h5"
						color="inherit"
						align="center"
						noWrap
						flex="1"
						// className={classes.toolbarTitle}
					>
						<Box
							component="img"
							// marginRight={0.5}
							src="images/logoHeader_2.png"
							alt="揪好咖"
						></Box>
					</Typography>
					{/* 登入後 ------------------------------------------------*/}
					{/* <Box>
					<Box
						borderRadius="5rem"
						bgcolor="#EFF0F7"
						display="inline-flex"
						justifyContent="flex-start"
						spacing={20}
						padding={0.5}
						alignItems="center"
					>
						<Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
						<Box color="#22252A" margin={1}>
							CIAO! Samew
						</Box>
					</Box>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							票卷
						</Badge>
					</IconButton>
					<IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							愛心
						</Badge>
					</IconButton>
				</Box> */}
					{/* 登入前 ------------------------------------------------*/}
					<Button color="inherit" href="/login">
						登入
					</Button>
					|
					<Button color="inherit" href="/register">
						註冊
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
