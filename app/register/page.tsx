"use client";

import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { RegisterForm } from "@/types/AuthType";
import axios from "@/plugins/api/axios";
import NextLink from "next/link";
import { logoutUser } from "@/features/user/authSlice";
import { useRouter } from "next/navigation";

import {
	Grid,
	Box,
	Typography,
	Fade,
	FormControl,
	TextField,
	Button,
	Link as MuiLink,
	Alert,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Register() {
	const { user } = axios;
	const router = useRouter();
	const dispatch = useDispatch();
	const logout = () => dispatch(logoutUser());
	const [checked, setChecked] = useState(true);
	const handleChange = () => {
		setChecked((prev) => !prev);
	};
	const [registerForm, setRegisterForm] = useState<RegisterForm>({
		name: "",
		mobile: "",
		email: "",
		password: "",
		confirm: "",
	});
	const [errorMsg, setErrorMsg] = useState("");
	const [successMsg, setSuccessMsg] = useState("");
	const [validName, setValidName] = useState("");
	const [validEmail, setValidEmail] = useState("");
	const [validMobile, setValidMobile] = useState("");
	const [validPwd, setValidPwd] = useState("");
	const [validMatch, setValidMatch] = useState("");

	const NAME_REGEX = /^[\u4E00-\u9FA5\w]{3,23}$/; // eslint-disable-line
	const TW_PHONE_REGEX = /^09\d{8}$/; // eslint-disable-line
	const EMAIL_REGEX = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; // eslint-disable-line
	const PWD_REGEX = /^[0-9a-zA-Z]{8,24}$/; // eslint-disable-line

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		e.preventDefault();
		const { name, value } = e.target;

		if (name === "name") {
			if (value === "") {
				setValidName("請輸入姓名");
			} else if (!NAME_REGEX.test(value)) {
				setValidName("請確認姓名格式，僅接受中文及英數字");
			} else {
				setValidName("");
			}
		}

		if (name === "mobile") {
			if (value === "") {
				setValidMobile("請輸入手機");
			} else if (!TW_PHONE_REGEX.test(value)) {
				setValidMobile("請確認手機格式，格式為0900000000");
			} else {
				setValidMobile("");
			}
		}

		if (name === "email") {
			if (value === "") {
				setValidEmail("請輸入帳號");
			} else if (!EMAIL_REGEX.test(value)) {
				setValidEmail("請輸入Email格式");
			} else {
				setValidEmail("");
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
		if (name === "confirm") {
			if (registerForm.password !== value) {
				setValidMatch("請輸入確認密碼一致");
			} else if (value !== "") {
				setValidMatch("");
			}
		}

		setRegisterForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const { email, password, mobile, name } = registerForm;

		if (!EMAIL_REGEX.test(email) || !PWD_REGEX.test(password)) return;
		setErrorMsg("");
		setSuccessMsg("");
		try {
			const result = await user.registerUser({
				name,
				mobile,
				password,
				email: email,
			});
			// TODO: 確認其他例外錯誤
			console.log(result);
			if (result.error && result.status == 409) {
				setErrorMsg("此帳號已被註冊過");
			} else if (result.data) {
				setSuccessMsg("註冊成功");
				setTimeout(() => {
					router.push("/");
				}, 2000); // 2秒後跳轉到首頁
			}
		} catch (err) {
			console.error(err);
		}
	};

	const step1 = (
		<Box
			sx={{
				width: "80%",
				margin: "auto",
			}}
		>
			<Box
				component="img"
				sx={{
					objectFit: "cover",
					marginBottom: 3,
				}}
				alt="logi"
				src="https://i.imgur.com/qokckjQ.png"
			/>
			<Typography variant="h6">加入揪好咖</Typography>
			<Typography variant="body1">
				你可以在這邊找到充滿趣味的活動，Join us！
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					my: 4,
				}}
			>
				<Button variant="contained" size="large" onClick={handleChange}>
					使用 Email 註冊
				</Button>
				<Typography variant="body1" sx={{ fontSize: 20 }}>
					或
				</Typography>
				<Button variant="outlined" size="large">
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
			<button onClick={logout}>登出</button>
		</Box>
	);

	const step2 = (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				position: "absolute",
				width: "80%",
				left: "10%",
				top: 0,
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: "-15%",
					left: 0,
				}}
			>
				<Button
					variant="outlined"
					aria-label="返回"
					sx={{
						width: "64px",
						height: "64px",
						padding: 0,
						borderRadius: 10,
					}}
					onClick={handleChange}
				>
					<ChevronLeftIcon />
				</Button>
			</Box>
			{errorMsg && <Alert severity="error">{errorMsg}</Alert>}
			{successMsg && <Alert severity="success">{successMsg}</Alert>}
			<FormControl>
				<TextField
					required
					name="name"
					value={registerForm.name}
					label="姓名"
					variant="outlined"
					margin="normal"
					error={validName !== ""}
					helperText={validName}
					InputLabelProps={{ shrink: true }}
					onChange={(event) => handleInputChange(event)}
				/>
				<TextField
					required
					name="email"
					type="email"
					value={registerForm.email}
					label="帳號"
					variant="outlined"
					margin="normal"
					error={validEmail !== ""}
					helperText={validEmail}
					InputLabelProps={{ shrink: true }}
					onChange={(event) => handleInputChange(event)}
				/>
				<TextField
					required
					name="mobile"
					value={registerForm.mobile}
					label="手機"
					variant="outlined"
					margin="normal"
					error={validMobile !== ""}
					helperText={validMobile}
					InputLabelProps={{ shrink: true }}
					onChange={(event) => handleInputChange(event)}
				/>
				<TextField
					required
					name="password"
					type="password"
					value={registerForm.password}
					label="輸入密碼"
					variant="outlined"
					margin="normal"
					error={validPwd !== ""}
					helperText={validPwd}
					InputLabelProps={{ shrink: true }}
					onChange={(event) => handleInputChange(event)}
				/>
				<TextField
					required
					name="confirm"
					value={registerForm.confirm}
					label="確認密碼"
					variant="outlined"
					margin="normal"
					error={validMatch !== ""}
					helperText={validMatch}
					InputLabelProps={{ shrink: true }}
					onChange={(event) => handleInputChange(event)}
				/>
				<Typography
					variant="body1"
					sx={{
						my: 3,
					}}
				>
					註冊即表示您已閱讀並同意
					<span>服務條款</span>及<span>隱私權政策</span>
				</Typography>

				<Button
					type="submit"
					variant="contained"
					size="large"
					disabled={
						validName !== "" ||
						validEmail !== "" ||
						validMobile !== "" ||
						validPwd !== "" ||
						validMatch !== ""
					}
					onClick={handleSubmit}
				>
					註冊
				</Button>
			</FormControl>
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
						position: "relative",
					}}
				>
					<Fade in={checked}>{step1}</Fade>
					<Fade in={!checked}>{step2}</Fade>
				</Box>
			</Grid>
		</Grid>
	);
}
