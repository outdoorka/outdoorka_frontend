"use client";

import { useState, useEffect, SyntheticEvent } from "react";
import { useSearchParams } from "next/navigation";

import OrganizerLayout from "@/components/layout/OrganizerLayout/OrganizerLayout";

import axios from "@/plugins/api/axios";
import { OrganizerActivityState } from "@/types/ActivitiesType";
import Loading from "@/components/ui/loading/loading";
import { Box, Tab, Tabs, Grid } from "@mui/material";
import CardOrganizerActivity from "@/components/ui/card/CardOrganizerActivity";

function OrganizerActivityList() {
	const searchParams = useSearchParams()
	const type = searchParams?.get("type")
	const { organizer } = axios;

	const [activityList, setActivityList] = useState<OrganizerActivityState[]>([]);
	const [error, setError] = useState("");
  const [tagValue, setTagValue] = useState(type?Number(type):0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTagValue(newValue);
  };
	useEffect(() => {
		async function loadData() {
			try {
				const responseBody = await organizer.getActivity();
				console.log(responseBody);
				
				if (responseBody && responseBody.data) {
					setActivityList(responseBody.data);
				}
			} catch (error) {
				setError("Failed to fetch data: " + String(error));
			}
		}
		loadData();
	}, []);

	if (error) return <div>Failed to load</div>;
	if (activityList.length === 0) return <Loading />;

	return (
		<OrganizerLayout>
			<Box sx={{ borderBottom: 1, borderColor: "divider", mb:2  }}>
				{!(type && Number(type) == 2 ) ? (
					<Tabs value={tagValue} onChange={handleChange} aria-label="活動類別">
						<Tab label="草稿" value={0}/>
						<Tab label="已發布" value={1}/>
					</Tabs>
				):(
					<Tabs value={tagValue} onChange={handleChange} aria-label="過往活動類別">
						<Tab label="已結束" value={2} />
					</Tabs>
				)}
			</Box>
			<Grid container spacing={2}>
				{activityList?.map((value) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={value._id}>
						<CardOrganizerActivity 
							isFinish={tagValue === 2}
							isPublish={tagValue}
							activity={value}
						/>
					</Grid>
				))}
			</Grid>
		</OrganizerLayout>
	);
}

export default OrganizerActivityList;
