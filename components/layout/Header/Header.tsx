"use client";

import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/types";
import { logoutUser } from "@/features/user/authSlice";

import {
	AppBar,
	Box,
	Link,
	Avatar,
	IconButton,
	Badge,
	Button,
	Toolbar,
	Menu,
	MenuItem,
	useScrollTrigger,
	ClickAwayListener,
} from "@mui/material";

import LogoHeader1 from "@/public/images/logoHeader_1.svg"
import LogoHeader2 from "@/public/images/logoHeader_2.svg"
import TicketSvg from "@/public/icons/ticket.svg"
import LikedSvg from "@/public/icons/liked.svg"

const linkTiltes = [
	{
		title: "關於我們",
		link: "#",
	},
	{
		title: "活動",
		link: "/activities",
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

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const anchorRef = React.useRef<HTMLButtonElement>(null);
	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}
		setAnchorEl(null);
	};

	const dispatch = useDispatch();
	const { profile: authUser } = useSelector((x: RootState) => x.auth);
	const logout = () => {
		dispatch(logoutUser());
		setAnchorEl(null);
	};
	const router = useRouter();
	const lintToProfile = () => {
		router.push("/user/profile/");
		setAnchorEl(null);
	};

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<AppBar
			elevation={scrollDownFlag ? 4 : 0}
			sx={{
				backgroundColor: scrollDownFlag ? "#D9D9D9" : "transparent",
				color: "#4A4642",
				transition: scrollDownFlag ? "0.3s" : "0.5s",
				boxShadow: "none",
				padding: "10px 0px",
				elevation: scrollDownFlag ? 4 : 0,
			}}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Box>
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
						>
							{item.title}
						</Link>
					))}
				</Box>

				<Button
					component={NextLink}
					href="/"
				>
					{
						scrollDownFlag? (
							<Image
								src={LogoHeader2}
								width={150}
								height={48}
								alt="揪好咖"
								style={{
									transition: scrollDownFlag ? "0.3s" : "0.5s",
								}}
								priority={true}	
							/>
						):(
							<Image
								src={LogoHeader1}
								width={100}
								height={48}
								alt="揪好咖"
								style={{
									transition: scrollDownFlag ? "0.3s" : "0.5s",
								}}
								priority={true}	
							/>
						)
					}
				</Button>

				<Fragment>
					{isClient ? (
						!authUser ? (
							<Box>
								<Button color="inherit" href="/login">
									登入
								</Button>
								|
								<Button color="inherit" href="/register">
									註冊
								</Button>
							</Box>
						) : (
							<Box>
								<Box
									bgcolor="#EFF0F7"
									display="inline-flex"
									justifyContent="flex-start"
									alignItems="center"
									sx={{
										mr: 1,
										p: 1,
										borderRadius: "5rem",
									}}
								>
									<IconButton ref={anchorRef} onClick={handleClick}>
										<Avatar sx={{ width: 40, height: 40 }}>M</Avatar>
									</IconButton>
									<Box color="#22252A" margin={1}>
										CIAO! {authUser.name}
									</Box>
								</Box>
								<ClickAwayListener onClickAway={handleClose}>
									<Menu
										anchorEl={anchorEl}
										id="account-menu"
										open={open}
										onClose={handleClose}
										onClick={handleClose}
										transformOrigin={{ horizontal: "left", vertical: "top" }}
										anchorOrigin={{ horizontal: "left", vertical: "top" }}
										PaperProps={{
											sx: {
												width: 336,
												px: 1,
												borderRadius: "8px",
												backdropFilter: "invert(5%)",
												backgroundColor: "rgba(255, 255, 255, .5)",
											},
										}}
									>
										<Box sx={{
											margin: "0 auto 32px auto",
											borderRadius: "4px",
											padding: 2,
											backgroundColor: "#fff"
										}}>
											<Box sx={{
												display: "inline-flex",
												marginBottom: 1
											}}>
												<Avatar sx={{ 
													width: 40, 
													height: 40,
													marginRight: 1
												}}>M</Avatar>
												<p>
													{authUser.name}
												</p>
											</Box>
											<MenuItem onClick={lintToProfile}>管理帳號</MenuItem>
											<MenuItem onClick={handleClose}>我的收藏</MenuItem>
											<MenuItem onClick={handleClose}>我的票卷</MenuItem>
											<MenuItem onClick={logout}>登出</MenuItem>
										</Box>
									</Menu>
								</ClickAwayListener>

								<IconButton color="inherit" sx={{ mr: 1 }}>
									<Badge badgeContent={4} color="secondary">
										<Image
											src={TicketSvg}
											width={24}
											height={24}
											alt="ticket"
										/>
									</Badge>
								</IconButton>

								<IconButton color="info">
									<Badge badgeContent={4} color="secondary">
										<Image
											src={LikedSvg}
											width={24}
											height={24}
											alt="liked"
										/>
									</Badge>
								</IconButton>
							</Box>
						)
					) : (
						<Box sx={{ width: 290 }}></Box>
					)}
				</Fragment>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
