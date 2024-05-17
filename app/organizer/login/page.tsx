"use client";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { loginOrganizer } from "@/features/organizer/ogAuthSlice";

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
	Fade,
} from "@mui/material";
import { LoginOrganizerForm } from "@/types/AuthType";

export default function Login() {
	const router = useRouter();
	const dispatch = useDispatch();
	// const token = useSelector((state:any) => state.auth.token);

	const [loginForm, setLoginForm] = useState<LoginOrganizerForm>({
		email: "",
		password: "",
	});
	const [validAccount, setValidAccount] = useState("");
	const [validPwd, setValidPwd] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");

	const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
	const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

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
				setValidPwd("請確認密碼格式，規則為大小寫英數字混合，並且至少八碼");
			} else {
				setValidPwd("");
			}
		}

		setLoginForm((prevForm: any) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const { email, password } = loginForm as LoginOrganizerForm;

		console.log("handleSubmit", email, password);

		if (!EMAIL_REGEX.test(email) || !PWD_REGEX.test(password)) return;
		setErrorMsg("");
		setSuccessMsg("");

		dispatch(loginOrganizer(loginForm) as any).then((res: any) => {
			if (res.payload.data) {
				setSuccessMsg(res.payload.message);

				alert("登入成功");
				setTimeout(() => {
					router.push("/");
				}, 300000); // 2秒後跳轉到首頁
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
					src="https://fastly.picsum.photos/id/572/1000/700.jpg?hmac=4wtTOriqhtIkQQpz6N9PLCmvzXwMvkGpSE235Mu_P9Q"
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
				<Fade in={true}>
					<Box
						sx={{
							width: "75%",
							margin: "auto",
						}}
					>
						<Box component="form" noValidate autoComplete="off">
							{/* {token} */}

							<Typography variant="h3" sx={{ marginBottom: "26px" }}>
								揪好咖
							</Typography>

							{errorMsg && <Alert severity="error">{errorMsg}</Alert>}
							{successMsg && <Alert severity="success">{successMsg}</Alert>}
							<FormGroup>
								<TextField
									required
									name="email"
									type="email"
									value={loginForm.email}
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
									主揪登入
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
									<MuiLink
										component={NextLink}
										href="/forget"
										underline="always"
									>
										忘記密碼?
									</MuiLink>
								</Box>
							</FormGroup>
						</Box>

						<Typography variant="body1">
							尚未註冊帳號？
							<MuiLink
								component={NextLink}
								href="/organizer/register"
								underline="always"
							>
								立即註冊
							</MuiLink>
						</Typography>
					</Box>
				</Fade>
			</Grid>
		</Grid>
	);
}
