"use client";

import React from "react";
import NextLink from 'next/link';
import { Grid, Box, Typography, FormGroup, FormControlLabel, Checkbox, TextField, ButtonGroup, Button, Link as MuiLink } from "@mui/material";

function Login() {
	return (
		<Box
			sx={{
				maxWidth: 400,
				margin: 'auto',
				flexGrow: 1
			}}
	  	>
			<Grid 
				container 
				height="100dvh"
				direction="column"
				alignItems="center"
				justifyContent="center"
				spacing={2}
			>			
				<Grid item sx={{width: '100%'}}>
					<Typography variant="h6">
						重設密碼
					</Typography>
					<Typography variant="body1">
						請輸入您註冊時所使用的 Email 帳號
					</Typography>
				</Grid>
				<Grid item sx={{width: '100%',textAlign: "center"}}>
					<Box
						component="form"
						noValidate
						autoComplete="off"
						sx={{
							display: 'flex',
							flexDirection: "column",
						}}
					>
						<TextField 
							required 
							id="email"
							label="Email" 
							variant="outlined"
							margin="dense"
						/>
						<Button variant="contained" size="large" sx={{marginTop: 1, marginBottom: 1}}>
							寄送重設密碼連結
						</Button>
					</Box>
				</Grid>
				<Grid item sx={{width: '100%',textAlign: "center"}}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: "column",
						}}
					>
						<Typography variant="body1" sx={{ fontSize: 20, marginBottom: 1 }}>
							或
						</Typography>
						<Button component={NextLink} href="/login" variant="outlined" size="large">
							返回登入
						</Button>
						<Typography variant="body1" sx={{ marginTop: 2 }}>
							尚未註冊帳號？
							<MuiLink component={NextLink} href="/register" underline="always">
								立即註冊
							</MuiLink>
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Login;
