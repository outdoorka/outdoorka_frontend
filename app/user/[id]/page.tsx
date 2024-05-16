"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "@/plugins/api/axios";

import UserProfile from "./userProfile";
import ChangeEmail from "./changeEmail";
import ChangePassword from "./changePassword";

import {
	Box,
	Container,
	Grid,
	ListItemIcon,
	MenuItem,
	MenuList,
	TextField,
	Typography,
} from "@mui/material";

const { user } = axios;

function UserPage() {
	const params = useParams<{ id: string }>();
	const [userData, setUserData] = React.useState<any>({});
	const [switchTab, setSwitchTab] = React.useState(0);

	const { id } = params || {};

	useEffect(() => {
		if (!id) return;

		const fetchUser = async () => {
			const getUser = await user.getUser(id);
			if (!getUser || !getUser.data) return;
			setUserData(getUser.data);
			console.log(getUser.data);
		};

		fetchUser();
	}, [id]);

	const handleSwitchTab = (tab: number) => {
		setSwitchTab(tab);
	};

	return (
		<Container component="main" maxWidth="md">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<MenuList>
							<MenuItem
								selected={switchTab === 0}
								onClick={() => handleSwitchTab(0)}
							>
								{switchTab === 0 ? (
									<ListItemIcon>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
								) : (
									<ListItemIcon></ListItemIcon>
								)}
								<Typography variant="inherit">個人資料</Typography>
							</MenuItem>
							<MenuItem
								selected={switchTab === 1}
								onClick={() => handleSwitchTab(1)}
							>
								{switchTab === 1 ? (
									<ListItemIcon>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
								) : (
									<ListItemIcon></ListItemIcon>
								)}
								<Typography variant="inherit">變更Email</Typography>
							</MenuItem>
							<MenuItem
								selected={switchTab === 2}
								onClick={() => handleSwitchTab(2)}
							>
								{switchTab === 2 ? (
									<ListItemIcon>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
								) : (
									<ListItemIcon></ListItemIcon>
								)}
								<Typography variant="inherit" noWrap>
									變更密碼
								</Typography>
							</MenuItem>
						</MenuList>
					</Grid>
					<Grid item xs={8}>
						{switchTab === 0 && userData && userData.email && (
							<UserProfile userData={userData} />
						)}

						{switchTab === 1 && userData && userData.email && (
							<ChangeEmail userData={userData} />
						)}

						{switchTab === 2 && userData && userData.email && (
							<ChangePassword userData={userData} />
						)}
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

export default UserPage;
