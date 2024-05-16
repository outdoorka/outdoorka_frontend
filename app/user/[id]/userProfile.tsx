"use client";
import React from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
	Avatar,
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	TextField,
} from "@mui/material";
import axios from "@/plugins/api/axios";

type Props = { userData: any; onEdit?: any };

const { user } = axios;

export default function UserProfile({ userData }: Props) {
	const [gender, setGender] = React.useState(userData?.gender || "");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const postData = {
			name: data.get("name"),
			nickName: data.get("nickName"),
			photo: "https://thispersondoesnotexist.com",
			mobile: data.get("mobile"),
			gender: gender,
			birthday: data.get("birthday"),
		};
		console.log(postData);

		if (!postData || !postData.name || !postData.mobile || !postData.birthday) {
			console.error("請輸入完整資料");
			return;
		}

		user
			.updateUser(userData._id, postData)
			.then((result: any) => {
				console.log(result);
			})
			.catch((err: any) => {
				console.error(err);
			});
	};

	const handleSelectChange = (event: SelectChangeEvent) => {
		console.log(event.target.value as string);
		setGender(event.target.value as string);
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
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{}}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Avatar
								alt="Avatar"
								src={userData.photo}
								sx={{
									width: 120,
									height: 120,
									margin: "0 auto",
									cursor: "pointer",
									marginBottom: 2,
								}}
								onClick={() => console.log("Change Avatar")}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="name"
								label="名稱"
								name="name"
								defaultValue={userData.name}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="mobile"
								label="手機號碼"
								name="mobile"
								defaultValue={userData.mobile}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="birthday"
								label="生日"
								name="birthday"
								defaultValue={userData.birthday}
							/>
						</Grid>
						<Grid item xs={12}>
							{/* <TextField
								required
								fullWidth
								id="gender"
								label="姓別"
								name="gender"
								defaultValue={userData.gender}
							/> */}
							<FormControl fullWidth>
								<InputLabel id="gender-label">Age</InputLabel>
								<Select
									labelId="gender-label"
									id="gender"
									value={gender}
									label="gender"
									onChange={handleSelectChange}
								>
									<MenuItem value={"male"}>生理男</MenuItem>
									<MenuItem value={"female"}>生理女</MenuItem>
								</Select>
							</FormControl>
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
