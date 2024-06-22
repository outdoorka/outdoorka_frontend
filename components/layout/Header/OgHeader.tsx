"use client";

import { useState, useEffect, MouseEvent, SyntheticEvent } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { RootState } from "@/types";

import { getOrganizer, logoutOrganizer } from "@/features/organizer/ogAuthSlice";
import { OG_TOK0N_COOKIE, getCookie } from "@/utils/cookieHandler";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Stack,
	Toolbar,
	Typography,
	ClickAwayListener,
	Menu,
	MenuItem
} from "@mui/material";
import LogoHeader1 from "@/public/images/logoHeader_1.svg";

function OgHeader() {
	const router = useRouter();
	const dispatch = useDispatch();
	const {profile} = useSelector((state: RootState) => state.ogAuth);
	
	useEffect(() => {
		const getOgToken = getCookie(OG_TOK0N_COOKIE);
		if (getOgToken) {
			dispatch(getOrganizer() as any).then((res: any) => {
				if (res.error?.message) {
					router.push("/organizer/login");
				}
			});
		}else{
			router.push("/organizer/login");
		}
	}, []);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleProfileMenuClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleProfileMenuClose = (event: Event | SyntheticEvent) => {
		if (anchorEl && anchorEl.contains(event.target as HTMLElement)) return;
		setAnchorEl(null);
	};
	const handleLogout = () => {
		handleProfileMenuClose(new Event("logout"));
		dispatch(logoutOrganizer());
		router.push("/");
	};
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
					}}
				>
					<Button component={NextLink} href="/organizer/activity">
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

					<Box>
						{profile && profile.photo && (
							<Stack direction="row" spacing={2}>
								<Avatar
									alt={profile.name}
									src={profile.photo}
									sx={{ width: 56, height: 56 }}
								/>
								<Button
									sx={{
										margin: "0 8px 0 0",
										borderRadius: "5px",
									}}
									onClick={handleProfileMenuClick}
								>
									<Typography
										variant="h6"
										component="h6"
										sx={{
											color: "#fff",
										}}
									>
										{profile.name}
									</Typography>
								</Button>

								<ClickAwayListener onClickAway={handleProfileMenuClose}>
									<Menu
										id="account-menu"
										anchorEl={anchorEl}
										open={open}
										onClose={handleProfileMenuClose}
										transformOrigin={{ horizontal: "left", vertical: "top" }}
										anchorOrigin={{ horizontal: "left", vertical: "top" }}
										PaperProps={{
											sx: {
												width: 336,
												px: 1,
												borderRadius: 1,
												backdropFilter: "invert(5%)",
												backgroundColor: "rgba(255, 255, 255, .5)",
											},
										}}
									>
										<Box
											sx={{
												margin: "0 auto 32px auto",
												borderRadius: "4px",
												padding: 2,
												backgroundColor: "#fff",
											}}
										>
											<Box sx={{ 
												display: "inline-flex", 
												alignItems: "center",
												marginBottom: 1
											}}>
												<Avatar 
													alt={profile.name}
													src={profile.photo}
													sx={{ width: 40, height: 40, marginRight: 1 }}
												/>
												<Typography>{profile.name}</Typography>
											</Box>
											{/* <MenuItem onClick={handleProfile}>管理帳號</MenuItem> */}
											<MenuItem onClick={handleLogout}>登出</MenuItem>
										</Box>
									</Menu>
								</ClickAwayListener>
							</Stack>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default OgHeader;
