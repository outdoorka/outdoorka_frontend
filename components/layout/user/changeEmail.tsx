"use client";
import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

import axios from "@/plugins/api/axios";

type Props = { userData: any; onEdit?: any };

const { user } = axios;

export default function ChangeEmail({ userData }: Props) {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const postData = {
			email: data.get("newEmail"),
			password: data.get("password"),
		};

		if (!postData || !postData.email || !postData.password) {
			console.error("請輸入完整資料");
			return;
		}

		user
			.updateUserEmail(userData._id, postData)
			.then((result: any) => {
				console.log(result);
			})
			.catch((err: any) => {
				console.error(err);
			});

		console.log(postData);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{userData && userData.email && (
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								fullWidth
								id="oldEmail"
								label="原有的 Email"
								name="oldEmail"
								disabled
								defaultValue={userData.email}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="newEmail"
								label="新的 Email"
								name="newEmail"
								autoComplete="email"
								defaultValue=""
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="password"
								required
								fullWidth
								label="密碼"
								name="password"
								type="password"
								autoComplete="current-password"
							/>
						</Grid>
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						變更
					</Button>
				</Box>
			)}
		</Box>
	);
}
