"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { getOrganizer } from "@/features/organizer/ogAuthSlice";
import { getCookie } from "@/utils/cookieHandler";
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import LogoHeader1 from "@/public/images/logoHeader_1.svg";

import { RootState } from "@/types";
import { ProfileOgItem } from "@/types/AuthType";

function OgHeader() {
	const router = useRouter();
	const dispatch = useDispatch();
	// Get ogAuth from redux
	const ogAuth = useSelector((state: RootState) => state.ogAuth);

	const [profile, setProfile] = useState<ProfileOgItem | null>(null);

	useEffect(() => {
		if (ogAuth.profile?._id) {
			return;
		}

		const getOgToken = getCookie("OUTDOORKA_OG_TOKEN");
		if (getOgToken) {
			dispatch(getOrganizer() as any).then((res: any) => {
				if (res.payload.data) {
					setProfile(res.payload.data);
				} else if (res.payload.error) {
					router.push("/organizer/login");
				}
			});
			return;
		}

		router.push("/organizer/login");
	}, []);

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
					<Button component={NextLink} href="/organizer/activity-list">
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
									component={NextLink}
									href="#"
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
							</Stack>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default OgHeader;
