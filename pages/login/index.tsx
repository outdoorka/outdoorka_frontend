"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "@/features/user/authSlice";
import NextLink from "next/link";
import { useRouter } from "next/router";

import {
	Grid,
	Box,
	Typography,
	FormGroup,
	FormControlLabel,
	Checkbox,
	TextField,
	Button,
	Link as MuiLink,
	Alert,
} from "@mui/material";
import { LoginForm } from "@/types/AuthType";

export default function Login() {
	const dispatch = useDispatch();
	// const token = useSelector((state:any) => state.auth.token);

	const [loginForm, setLoginForm] = useState<LoginForm>({
		account: "",
		password: "",
	});
	const [validAccount, setValidAccount] = useState("");
	const [validPwd, setValidPwd] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; // eslint-disable-line
	const PWD_REGEX = /^[0-9a-zA-Z]{8,24}$/; // eslint-disable-line

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		e.preventDefault();
		const { name, value } = e.target;
		if (name === "account") {
			if (value === "") {
				setValidAccount("請輸入帳號");
			} else if (!EMAIL_REGEX.test(value)) {
				setValidAccount("請輸入Email格式");
			} else {
				setValidAccount("");
			}
		}
		if (name === "password") {
			if (value === "") {
				setValidPwd("請輸入密碼");
			} else if (!PWD_REGEX.test(value)) {
				setValidPwd("請確認正確密碼格式，規則為大小寫英數字並且至少八碼");
			} else {
				setValidPwd("");
			}
		}

		setLoginForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const router = useRouter();

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const { account, password } = loginForm;

		if (!EMAIL_REGEX.test(account) || !PWD_REGEX.test(password)) return;
		setErrorMsg("");
		setSuccessMsg("");
		dispatch(loginUser(loginForm)).then((res: any) => {
			if (res.payload.data) {
				setSuccessMsg(res.payload.message);
				setTimeout(() => {
					router.push("/");
				}, 2000); // 2秒後跳轉到首頁
			} else if (res.payload.error) {
				setErrorMsg(res.payload.error);
			}
		});
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			spacing={2}
		>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					overflow: "hidden",
				}}
			>
				<Box
					component="img"
					sx={{
						objectFit: "cover",
					}}
					style={{
						height: "100dvh",
					}}
					display={{ xs: "none", md: "block" }}
					alt="cover"
					src="https://i.imgur.com/UTYmBjM.jpg"
				/>
			</Grid>

			<Grid
				item
				xs={12}
				md={6}
				sx={{
					textAlign: "center",
				}}
			>
				<Box
					sx={{
						width: "75%",
						margin: "auto",
					}}
				>
					<Box component="form" noValidate autoComplete="off">
						{/* {token} */}
						<Box
							component="img"
							sx={{
								objectFit: "cover",
								marginBottom: 3,
							}}
							alt="login"
							src="https://i.imgur.com/qokckjQ.png"
						/>
						{errorMsg && <Alert severity="error">{errorMsg}</Alert>}
						{successMsg && <Alert severity="success">{successMsg}</Alert>}
						<FormGroup>
							<TextField
								required
								name="account"
								type="email"
								value={loginForm.account}
								label="帳號"
								margin="normal"
								error={validAccount !== ""}
								helperText={validAccount}
								InputLabelProps={{ shrink: true }}
								onChange={(event) => handleInputChange(event)}
							/>
							<TextField
								required
								name="password"
								value={loginForm.password}
								label="密碼"
								margin="normal"
								type="password"
								error={validPwd !== ""}
								helperText={validPwd}
								InputLabelProps={{ shrink: true }}
								onChange={(event) => handleInputChange(event)}
							/>
							<Button
								variant="contained"
								size="large"
								sx={{
									marginTop: 1,
									marginBottom: 1,
								}}
								onClick={handleSubmit}
								disabled={validAccount !== "" || validPwd !== ""}
							>
								登入
							</Button>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									my: 2,
								}}
							>
								<FormControlLabel
									control={<Checkbox defaultChecked />}
									label="記住我"
								/>
								<MuiLink component={NextLink} href="/forget" underline="always">
									忘記密碼
								</MuiLink>
							</Box>
						</FormGroup>
					</Box>
					<Typography variant="body1" sx={{ fontSize: 20 }}>
						或
					</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 1,
							my: 2,
						}}
					>
						<Button variant="outlined" size="large">
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
