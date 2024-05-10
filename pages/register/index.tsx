'use client';

import React from 'react';
import NextLink from 'next/link';
import { Grid, Box, Typography, Fade, FormGroup, TextField, Button, Link as MuiLink } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Login() {
	const [checked, setChecked] = React.useState(true);
	const handleChange = () => {
	  setChecked((prev) => !prev);
	};

	const step1 = (
		<Box sx={{
			width: '80%',
			margin: 'auto',
		}}>
			<Box
				component="img"
				sx={{
					objectFit: 'cover',
					marginBottom: 3
				}}
				alt="logi"
				src="https://i.imgur.com/qokckjQ.png"
			/>
			<Typography variant="h6">
				加入揪好咖
			</Typography>
			<Typography variant="body1">
				你可以在這邊找到充滿趣味的活動，Join us！
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
					my: 4
				}}
			>
				<Button variant="contained" size="large" onClick={handleChange}>
					使用 Email 註冊
				</Button>
				<Typography variant="body1" sx={{ fontSize: 20 }}>
					或
				</Typography>
				<Button variant="outlined" size="large" >
					使用 Google 帳號登入
				</Button>
				<Button variant="outlined" size="large">
					使用 LINE 帳號登入
				</Button>
			</Box>
		<Typography variant="body1">
			已經有揪好咖帳號？
			<MuiLink component={NextLink} href="/login" underline="always">
				立即登入
			</MuiLink>
		</Typography>
	</Box>
	);

	const step2 = (
		<Box
			component='form'
			noValidate
			autoComplete='off'
			sx={{
				position: 'absolute',
				width: '80%',
				left: '10%',
				top:0,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					top: '-15%',
					left: 0
				}}
			>
				<Button 
					variant='outlined'
					aria-label='返回'
					sx={{
						width: '64px',
						height: '64px',
						padding: 0,
						borderRadius: 10
					}}
					onClick={handleChange}
				>
					<ChevronLeftIcon />
				</Button>
			</Box>
			<FormGroup>
				<TextField 
					required 
					id="nickname"
					label="暱稱" 
					variant="outlined"
					margin="normal"
				/>
				<TextField 
					required 
					id="name"
					label="姓名" 
					variant='outlined'
					margin='normal'
				/>
				<TextField 
					required 
					id="mobile"
					label="手機" 
					variant="outlined"
					margin="normal"
				/>
				<TextField 
					required 
					id="account"
					label="帳號（請輸入您的Email）" 
					variant="outlined"
					margin="normal"
				/>
				<TextField 
					required id="psw" 
					label="密碼" 
					variant="outlined" 
					margin="normal"
					type="password"
				/>
				<TextField 
					required id="checkPsw" 
					label="確認密碼" 
					variant="outlined" 
					margin="normal"
					type="password"
				/>
				<Typography
					variant="body1"
					sx={{
						my: 3
					}}
				>
					註冊即表示您已閱讀並同意
					<MuiLink component={NextLink} href="/" underline="always">
						服務條款
					</MuiLink>
					及
					<MuiLink component={NextLink} href="/" underline="always">
						隱私權政策
					</MuiLink>
				</Typography>
				<Button 
					variant="contained" 
					size="large"
				>
					註冊
				</Button>
			</FormGroup>
		</Box>
	);

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
						position: 'relative'
					}}
				>
					<Fade in={checked}>{step1}</Fade>
					<Fade in={!checked}>{step2}</Fade>
				</Box>
			</Grid>
		</Grid>
	);
}

export default Login;
