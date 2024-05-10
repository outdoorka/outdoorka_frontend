"use client";

import React from "react";
import NextLink from 'next/link';
import { Grid, Box, Typography, FormGroup, FormControlLabel, Checkbox, TextField, Button, Link as MuiLink } from "@mui/material";

function Login() {
	const [account, setAccount] = React.useState("");
	const [psw, setPsw] = React.useState("");
	const handleEmailSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		console.log(psw);
		console.log(account);
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
							alt="logi"
							src="https://i.imgur.com/qokckjQ.png"
						/>
						<FormGroup>
							<TextField 
								required
								value={account}
								onChange={(event) => setAccount(event.target.value)}
								label="帳號" 
								variant="outlined"
								margin="normal"
							/>
							<TextField 
								required
								value={psw}
								onChange={(event) => setPsw(event.target.value)}
								label="密碼" 
								variant="outlined" 
								margin="normal"
								type="password"
							/>
							<Button 
								variant="contained" 
								size="large"
								sx={{
									marginTop: 1, 
									marginBottom: 1
								}}
								onClick={ handleEmailSubmit }
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

export default Login;
