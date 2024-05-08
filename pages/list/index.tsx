"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { fetchActivities } from "@/features/activity/activitySlice";

function ListPage() {
	const dispatch = useDispatch();
	const activities = useSelector((state: any) => state.activities.items);
	const status = useSelector((state: any) => state.activities.status);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchActivities());
		}
	}, [dispatch, status]);

	return (
		<Box>
			<Typography variant="h2" sx={{ fontSize: 28, fontWeight: 700 }}>
				List of Activities
			</Typography>
			{activities?.map((activity: any) => (
				<Box key={activity.id}>
					<Typography variant="h4" sx={{ fontSize: 20 }}>
						{activity.title}
					</Typography>
					<Box component="p">{activity.body}</Box>
				</Box>
			))}
		</Box>
	);
}

export default ListPage;
