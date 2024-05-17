"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
	Box,
	Button,
	Grid,
	IconButton,
	InputAdornment,
	OutlinedInput,
	InputLabel,
	FormControl,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "@/plugins/api/axios";
import { deleteCookie } from "cookies-next";

type Props = { userData: any; onEdit?: any };

const { user } = axios;

export default function ChangePassword({ userData }: Props) {
	const router = useRouter();
	const [showPassword, setShowPassword] = React.useState("");

	const handleClickShowPassword = (target: string) => {
		if (target === showPassword) {
			setShowPassword("");
		} else {
			setShowPassword(target);
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const postData = {
			password: data.get("old-password"),
			newPassword: data.get("new-password"),
			confirmPassword: data.get("confirm-password"),
		};

		console.log(postData);

		if (!postData || !postData.password || !postData.newPassword) {
			console.error("請輸入密碼");
			return;
		}

		if (postData.newPassword === postData.password) {
			console.error("與原密碼相同");
			return;
		}

		if (postData.newPassword !== postData.confirmPassword) {
			console.error("密碼不一致");
			return;
		}

		user
			.updateUserPassword(userData._id, postData)
			.then((result: any) => {
				console.log(result);
				setTimeout(() => {
					deleteCookie("OUTDOORKA_TOKEN");
					router.push("/login");
				}, 2000); // 2秒後跳轉到登入頁
			})
			.catch((err: any) => {
				console.error(err);
			});
	};

	return (
		<Box
			sx={{
				marginTop: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{userData && userData.email && (
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<FormControl
								fullWidth
								required
								sx={{ mt: 3, mb: 3 }}
								variant="outlined"
							>
								<InputLabel htmlFor="old-password">原密碼</InputLabel>
								<OutlinedInput
									id="old-password"
									name="old-password"
									required
									fullWidth
									type={showPassword === "old-password" ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={() => handleClickShowPassword("old-password")}
												edge="end"
											>
												{showPassword === "old-password" ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth
								required
								sx={{ mt: 3, mb: 3 }}
								variant="outlined"
							>
								<InputLabel htmlFor="new-password">新密碼</InputLabel>
								<OutlinedInput
									id="new-password"
									name="new-password"
									required
									fullWidth
									type={showPassword === "new-password" ? "text" : "password"}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={() => handleClickShowPassword("new-password")}
												edge="end"
											>
												{showPassword === "new-password" ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl
								fullWidth
								required
								sx={{ mt: 3, mb: 3 }}
								variant="outlined"
							>
								<InputLabel htmlFor="confirm-password">確認新密碼</InputLabel>
								<OutlinedInput
									id="confirm-password"
									name="confirm-password"
									required
									fullWidth
									type={
										showPassword === "confirm-password" ? "text" : "password"
									}
									endAdornment={
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={() =>
													handleClickShowPassword("confirm-password")
												}
												edge="end"
											>
												{showPassword === "confirm-password" ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
									label="Password"
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12}></Grid>
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						更新資料
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>.</Grid>
					</Grid>
				</Box>
			)}
		</Box>
	);
}
