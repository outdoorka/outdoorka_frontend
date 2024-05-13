"use client";

import React from "react";
import axios from "@/plugins/api/axios";
import NextLink from 'next/link';
import { Grid, Box, Typography, FormGroup, FormControlLabel, Checkbox, TextField, Button, Link as MuiLink } from "@mui/material";

export default function Login() {
	const { auth } = axios;

	const [account, setAccount] = React.useState("");
	const [pwd, setPwd] = React.useState("");
	const [validAccount, setValidAccount] = React.useState(true);
	const [validPwd, setValidPwd] = React.useState(true);

	const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ;
	const PWD_REGEX = /^[0-9a-zA-Z]{8,24}$/;

	React.useEffect(() => {
		if(account === "") return
		setValidAccount(EMAIL_REGEX.test(account));
	}, [account]);
	React.useEffect(() => {
		if(pwd === "") return
		setValidPwd(PWD_REGEX.test(pwd));
	}, [pwd]);

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		if (!EMAIL_REGEX.test(account)) {
			setValidAccount(EMAIL_REGEX.test(account));
			return;
		}
		if (!PWD_REGEX.test(pwd)) {
			setValidPwd(PWD_REGEX.test(pwd));
			return;
		}
		auth.loginUser({pwd,account})
		.then((result: any) => {
			console.log(result);
		})
		.catch((err: any) => {
			console.error(err);
		});
	}

	return (
		<Grid 
			container 
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			spacing={2}
		>
			<Grid item xs={12} md={6}
				sx={{
					overflow: 'hidden'
				}}
			>
				<Box
					component="img"
					sx={{
						objectFit: 'cover',
					}}
					style={{
						height: '100dvh'
					}}
					display={{ xs: "none", md: "block" }}
					alt="cover"
					src="https://s3-alpha-sig.figma.com/img/e2d0/978d/f32faa4faeb434d40ad6d4f316f93c0f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4He7o1-H7qkMGQWAEo9IjvLywWge~Y3W0xEKvM0140qjq5lmNl~1rjqwD3ro~v51XSCb3iKT4JweIfrjrDjlWdzU3BOWcyUrKxy8vRLj2bNnXk117hSi3nLwZFvty9fkFJ24nirXaME7uF9gaw~kzHLgI7uVWwHmu9ICsegLZG4w6yJKUzZ3Iqh3KJKsycOQYoxBGzJYPqEET84R7CFnVuplBi78fl095kQG8Ka~D-rGk2-ZHxFSGVPVpuqM8vOyEwnmduG-LU788gs3Sm86orfz95HrKQbUgzeOR3UM~fVnC8cihLiNTJ3EE1~ZYe-K0ja77zDGEVoimr-LiVN5A__"
				/>
			</Grid>

			<Grid 
				item 
				xs={12} 
				md={6}
				sx={{
					textAlign: "center"
				}}
			>	
				<Box
					sx={{
						width: '75%',
						margin: 'auto',
					}}
				>
					<Box
						component="form"
						noValidate
						autoComplete="off"
					>
						<Box
							component="img"
							sx={{
								objectFit: 'cover',
								marginBottom: 3
							}}
							alt="login"
							src="https://i.imgur.com/qokckjQ.png"
						/>
						<FormGroup>
							<TextField 
								required
								value={account}
								label="帳號" 
								margin="normal"
								error={!validAccount}
								helperText={account ? (!validAccount ? "請確認正確Email格式": "") : "請輸入您的Email"}
								InputLabelProps={{ shrink: true }}
								onChange={(event) => setAccount(event.target.value)}
							/>
							<TextField 
								required
								value={pwd}
								label="密碼" 
								margin="normal"
								type="password"
								error={!validPwd}
								helperText={!validPwd ? "請確認正確密碼格式，規則為大小寫英數字並且至少八碼" : ""}
								InputLabelProps={{ shrink: true }}
								onChange={(event) => setPwd(event.target.value)}
							/>
							<Button 
								variant="contained" 
								size="large"
								sx={{
									marginTop: 1, 
									marginBottom: 1
								}}
								onClick={ handleSubmit }
								disabled={
									!validAccount || !validPwd
									? true
									: false
								}
							>
								登入
							</Button>
							<Box
								sx={{
									display: 'flex',
									justifyContent:"space-between",
									alignItems: 'center',
									my: 2
								}}
							>
								<FormControlLabel 
									control={<Checkbox defaultChecked />} 
									label="記住我"
								/>
								<MuiLink
									component={NextLink}
									href="/forget"
									underline="always"
								>
									忘記密碼
								</MuiLink>
							</Box>
						</FormGroup>
					</Box>
					<Typography
						variant="body1"
						sx={{ fontSize: 20 }}
					>
						或
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
							my: 2
						}}
					>
						<Button variant="outlined" size="large" >
							使用 Google 帳號登入
						</Button>
						<Button variant="outlined" size="large">
							使用 LINE 帳號登入
						</Button>
					</Box>

					<Typography variant="body1">
						尚未註冊帳號？
						<MuiLink component={NextLink} href="/register" underline="always">
							立即註冊
						</MuiLink>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
}
