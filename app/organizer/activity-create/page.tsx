"use client";
import React, { ChangeEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "@/plugins/api/axios";
import OrganizerLayout from "@/components/layout/OrganizerLayout/OrganizerLayout";

import * as dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
	Autocomplete,
	Box,
	Button,
	Checkbox,
	Grid,
	Stack,
	TextField,
	Typography,
	IconButton,
	List,
	ListItem,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

import { ICreateActivity, RootState } from "@/types";
import { OgAuthState } from "@/types/AuthType";
import { ActivityTag, City } from "@/types/enum/activity";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// Initial data
const getDatetime = dayjs.default().add(7, "day");
// Initial activity data
const activityInitData: ICreateActivity = {
	title: "",
	subtitle: "",
	price: 0,
	totalCapacity: 0,
	city: City.Taipei,
	address: "",
	location: "",
	activityDetail: "",
	activityNotice: "",
	activityTags: [],
	activityLinks: [
		{ name: "", url: "" },
		{ name: "", url: "" },
		{ name: "", url: "" },
	],
	activityImageUrls: [],
	isPublish: false,
	activitySignupStartTime: getDatetime,
	activitySignupEndTime: getDatetime,
	activityStartTime: getDatetime,
	activityEndTime: getDatetime,
};
// City Select options
const citySelect = Object.keys(City).map((key) => ({
	value: key,
	label: City[key as keyof typeof City],
}));
// 活動 Tag options
const activitySelectTags = Object.keys(ActivityTag).map((key) => ({
	title: ActivityTag[key as keyof typeof ActivityTag],
	value: key,
}));

function ActivityCreate() {
	const { organizer } = axios;
	const [ogInfo, setOgInfo] = React.useState<OgAuthState>({
		profile: null,
		token: null,
	});
	const [activityData, setActivityData] =
		React.useState<ICreateActivity>(activityInitData);
	const [tags, setTags] = React.useState<any[]>([]);

	// Get ogAuth from redux
	const ogAuth = useSelector((state: RootState) => state.ogAuth);

	useEffect(() => {
		if (ogAuth?.profile && ogAuth.token?.access_token) {
			setOgInfo({
				profile: ogAuth.profile,
				token: ogAuth.token,
			});
		}
	}, []);

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		console.log("input change", e.target.name);

		setActivityData((preData) => ({
			...preData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLinkInputChange = (idx: number, targetName: "name" | "url") => {
		return (event: ChangeEvent<HTMLInputElement>) => {
			activityData.activityLinks[idx][targetName] = event.target.value;
			setActivityData((preData) => ({
				...preData,
				activityLinks: [...activityData.activityLinks],
			}));
		};
	};

	const handleLinkInputClean = (idx: number) => () => {
		activityData.activityLinks[idx].name = "";
		activityData.activityLinks[idx].url = "";
		setActivityData((preData) => ({
			...preData,
			activityLinks: [...activityData.activityLinks],
		}));
	};

	const handleSelectTagChange = (e: React.SyntheticEvent, newValue: any[]) => {
		setTags(newValue);
	};

	const handleSelectCityChange = (event: SelectChangeEvent) => {
		if (event.target.name === "citySelect") {
			setActivityData((preData) => ({
				...preData,
				city: event.target.value as City,
			}));
		}
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log("submit", activityData);

		activityData.activityTags = tags.map((tag) => tag.value);
		activityData.price = Number(activityData.price);
		activityData.totalCapacity = Number(activityData.totalCapacity);
		activityData.activityImageUrls = ["https://picsum.photos/800/600"];
		activityData.isPublish = true;

		organizer
			.createActivity(activityData)
			.then((res: any) => {
				console.log("createActivity", res);
			})
			.catch((err: any) => {
				console.log("createActivity", err);
			});
	};

	const renderSelectOption = (props: any, option: any, { selected }: any) => {
		return (
			<li {...props}>
				<Checkbox
					icon={icon}
					checkedIcon={checkedIcon}
					style={{ marginRight: 8 }}
					checked={selected}
				/>
				{option.title}
			</li>
		);
	};

	return (
		<OrganizerLayout>
			<FormControl>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							disabled
							label="活動舉辦方名稱"
							variant="outlined"
							margin="normal"
							fullWidth
							value={"舉辦方名稱"}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							required
							name="title"
							label="活動主標題"
							variant="outlined"
							margin="normal"
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							inputProps={{ maxLength: 100 }}
							onChange={handleInputChange}
							value={activityData.title}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							required
							name="subtitle"
							label="活動副標題"
							variant="outlined"
							margin="normal"
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							inputProps={{ maxLength: 100 }}
							onChange={handleInputChange}
							value={activityData.subtitle}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							required
							name="price"
							label="活動費用"
							variant="outlined"
							margin="normal"
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							onChange={handleInputChange}
							value={activityData.price}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography mt={0}>Tags</Typography>
						<Stack spacing={3} sx={{ width: 500 }}>
							<Autocomplete
								multiple
								id="tags-standard"
								fullWidth
								options={activitySelectTags}
								disableCloseOnSelect
								getOptionLabel={(option) => option.title}
								value={tags}
								onChange={handleSelectTagChange}
								renderOption={renderSelectOption}
								renderInput={(params) => (
									<TextField
										{...params}
										variant="standard"
										label="活動標籤"
										InputLabelProps={{ shrink: true }}
									/>
								)}
							/>
						</Stack>
					</Grid>

					<Grid item xs={12}>
						<TextField
							required
							name="totalCapacity"
							label="活動人數"
							variant="outlined"
							margin="normal"
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							onChange={handleInputChange}
							value={activityData.totalCapacity}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormControl sx={{ width: "50%" }}>
							<InputLabel id="city-select-label">City</InputLabel>
							<Select
								labelId="city-select-label"
								id="city-select"
								name="citySelect"
								value={activityData.city}
								label="City"
								onChange={handleSelectCityChange}
							>
								{citySelect.map((city) => (
									<MenuItem key={city.value} value={city.label}>
										{city.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<TextField
							required
							name="address"
							label="活動詳細地址"
							variant="outlined"
							margin="normal"
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							onChange={handleInputChange}
							value={activityData.address}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							required
							name="location"
							label="集合地點"
							variant="outlined"
							margin="normal"
							multiline
							rows={5}
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							onChange={handleInputChange}
							value={activityData.location}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography mt={0}>活動時間</Typography>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DateTimePicker"]}>
								<DateTimePicker
									label="活動開始時間"
									value={activityData.activityStartTime}
									onChange={(newValue) => console.log("活動開始時間", newValue)}
								/>
							</DemoContainer>
						</LocalizationProvider>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DateTimePicker"]}>
								<DateTimePicker
									label="活動結束時間"
									value={activityData.activityEndTime}
									onChange={(newValue) => console.log("活動結束時間", newValue)}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</Grid>

					<Grid item xs={12}>
						<Typography mt={0}>活動報名時間</Typography>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DateTimePicker"]}>
								<DateTimePicker
									label="活動報名起始日"
									value={activityData.activitySignupStartTime}
									onChange={(newValue) =>
										console.log("活動報名起始日", newValue)
									}
								/>
							</DemoContainer>
						</LocalizationProvider>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DemoContainer components={["DateTimePicker"]}>
								<DateTimePicker
									label="活動報名截止日"
									value={activityData.activitySignupEndTime}
									onChange={(newValue) =>
										console.log("活動報名截止日", newValue)
									}
								/>
							</DemoContainer>
						</LocalizationProvider>
					</Grid>

					<Grid item xs={12}>
						<Typography mt={0}>相關連結</Typography>
						<List>
							{activityData.activityLinks.map((link, index) => (
								<ListItem
									key={`activityLink-${index}`}
									secondaryAction={
										<IconButton
											edge="end"
											aria-label="delete"
											onClick={handleLinkInputClean(index)}
										>
											<DeleteIcon />
										</IconButton>
									}
								>
									<TextField
										required
										name={`activityLinkName-${index}`}
										label="名稱"
										variant="outlined"
										margin="normal"
										InputLabelProps={{ shrink: true }}
										sx={{ width: "35%" }}
										onChange={handleLinkInputChange(index, "name")}
										value={link.name}
									/>
									<TextField
										required
										name={`activityLinkUrl-${index}`}
										label="Url"
										variant="outlined"
										margin="normal"
										fullWidth
										InputLabelProps={{ shrink: true }}
										onChange={handleLinkInputChange(index, "url")}
										value={link.url}
									/>
								</ListItem>
							))}
						</List>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							name="activityDetail"
							label="活動內容"
							variant="outlined"
							margin="normal"
							multiline
							rows={5}
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							onChange={handleInputChange}
							value={activityData.activityDetail}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							name="activityNotice"
							label="活動注意事項"
							variant="outlined"
							margin="normal"
							multiline
							rows={5}
							fullWidth
							error={true}
							helperText={"Error phone"}
							InputLabelProps={{ shrink: true }}
							onChange={handleInputChange}
							value={activityData.activityNotice}
						/>
					</Grid>
					<Grid item xs={12}>
						<Typography mt={0}>上傳圖片 1/ 5</Typography>
					</Grid>

					<Button
						type="submit"
						variant="contained"
						size="large"
						onClick={handleSubmit}
					>
						建立活動
					</Button>
				</Grid>
			</FormControl>

			<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
				下一步
			</Button>
			<Box>{ogInfo.token?.access_token || "no token"}</Box>
		</OrganizerLayout>
	);
}

export default ActivityCreate;
