"use client";
import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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
	const scrollDownFlag = useScrollTrigger();
	const logined = true;
	return (
		<div>
			<AppBar
				elevation={scrollDownFlag ? 4 : 0}
				sx={{
					backgroundColor: scrollDownFlag ? "#D9D9D9" : "#FDFCFF",
					color: "#4A4642",
					transition: scrollDownFlag ? "0.3s" : "0.5s",
					boxShadow: "none",
					padding: "10px 0px",
					elevation: scrollDownFlag ? 4 : 0,
				}}
			>
				<Toolbar>
					{linkTiltes.map((item, index) => (
						<Link
							color="inherit"
							fontSize="inherit"
							noWrap
							key={index}
							href={item.link}
							underline="hover"
							sx={{
								padding: 1,
								marginRight: 3,
								flexShrink: 0,
								textDecoration: "none",
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
					>
						<Box
							component="img"
							alt="揪好咖"
							src={
								scrollDownFlag
									? "images/logoHeader_1.png"
									: "images/logoHeader_2.png"
							}
							sx={{
								transition: scrollDownFlag ? "0.3s" : "0.5s",
								elevation: scrollDownFlag ? 4 : 0,
							}}
						></Box>
					</Typography>
					<Box sx={{ display: logined ? "none" : "block" }}>
						{/* 登入前 ------------------------------------------------*/}
						<Button color="inherit" href="/login">
							登入
						</Button>
						|
						<Button color="inherit" href="/register">
							註冊
						</Button>
					</Box>
					<Box sx={{ display: !logined ? "none" : "block" }}>
						<Box>
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
									<img src="icons/ticket.svg" />
								</Badge>
							</IconButton>

							<IconButton color="info">
								<Badge badgeContent={4} color="secondary">
									<img src="icons/liked.svg" />
								</Badge>
							</IconButton>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
