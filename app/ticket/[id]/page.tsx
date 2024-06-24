"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useParams } from "next/navigation";

import { TicketInfoState } from "@/types/TicketType";
import axios from "@/plugins/api/axios";

import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import { parseDetailDate } from "@/utils/dateHandler";
import ExpandMoreIcon from "@/components/icon/ExpandMoreIcon";
import PageLayout from "@/components/layout/MainLayout/PageLayout";
import BackBtn from "@/components/ui/shared/BackBtn";
import useCustomTheme from "@/components/ui/shared/useCustomTheme";

// 	activity.activityTags: "", // TODO
// 	activity.ticketNote: "", // TODO
// 		activity.bookedCapacity: 2, // TODO

function Ticket() {
	const customStyle = useCustomTheme();
	// payment id
	const params = useParams<{ id: string }>();
	const { ticket } = axios;

	const [load, setLoad] = useState(true);
	const [ticketData, setTicketData] = useState<TicketInfoState | null>(null);
	useEffect(() => {
		if(!(params && params.id)) return
		const paymentID = params.id

		async function loadData() {
			setLoad(true);
			try {
				const responseBody = await ticket.getTicketInfo(paymentID);				
				if (responseBody && responseBody.data && responseBody.data.length === 1) {
					const parseData = responseBody.data[0]
					console.log(parseData);
					setTicketData(parseData)
				}
			} catch (error: any) {
				setTicketData(null);
				console.error(String(error?.message));
			}
			setLoad(false);
		}
		loadData();
	}, []);

	return (
		<PageLayout>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
					maxWidth: "1016px",
					width: "90%",
					margin: "auto",
				}}
			>
				<BackBtn href="/ticket" name="票卷清單" />
				{ticketData && (
					<>
						<Box sx={{ ...customStyle.paperStyle, my: 3 }}>
							<Typography variant="h2" sx={customStyle.h2Style}>
								{ticketData.activity.subtitle}
							</Typography>
							<Typography sx={customStyle.descStyle}>
								{parseDetailDate(
									ticketData.activity.activityStartTime,
									ticketData.activity.activityEndTime,
								)}
							</Typography>
							<Typography sx={customStyle.descStyle}>
								{ticketData.activity.region} {ticketData.activity.city}
							</Typography>
						</Box>
						
						<Accordion className="customAccordion" sx={customStyle.paperStyle}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="票卷明細"
								sx={customStyle.accordionStyle}
							>
								票卷明細
							</AccordionSummary>
							<AccordionDetails sx={{ ...customStyle.paperStyle, p: 0 }}>
								<Typography sx={customStyle.descStyle}>
									票券內容：XXX
								</Typography>
								<Typography sx={customStyle.descStyle}>
									票券狀態：已使用
									{/* 可能會有多個 */}
									{/* 票券狀態：{ticketData.ticketStatus ? "已使用" : "已報名"} */}
								</Typography>
								<Typography sx={customStyle.descStyle}>
									票價：NT$ XXX
								</Typography>
								<Typography sx={customStyle.descStyle}>
									備註：無
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Box
							sx={{
								...customStyle.paperStyle,
								backgroundColor: "#FFF",
								my: 3,
								display: "flex",
								flexDirection: { xs: "column", sm: "row" },
								justifyContent: "space-between",
								border: "2px solid #DFE2EB",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									margin: { xs: "0 auto 8px auto", sm: "auto" },
									p: 1,
								}}
							>
								{/* 票卷tickets[n]._id */}
								<QRCodeSVG value={ticketData._id} size={270} />
							</Box>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
									alignItems: { xs: "flex-start", sm: "flex-end" },
									width: { xs: "350px", sm: "calc(100% - 286px)" },
									margin: { xs: "8px auto 0 auto", sm: "auto auto 0 auto" },
								}}
							>
								<Box
									sx={{
										fontSize: "24px",
										fontWeight: 700,
										px: 3,
										py: 1,
										mb: 5,
										backgroundColor: "#FFDAD9",
									}}
								>
									已使用
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: { xs: "column", sm: "row" },
										width: "96%",
										mb: 1,
										justifyContent: { xs: "flex-start", sm: "space-between" },
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "16px", sm: "22px" },
											mb: { xs: 0.5, sm: 0 },
											color: "#74777D",
										}}
									>
										參加人
									</Typography>
									<Typography
										sx={{
											fontSize: "28px",
											fontWeight: 700,
										}}
									>
										XXX
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: { xs: "column", sm: "row" },
										width: "96%",
										mb: 1,
										justifyContent: { xs: "flex-start", sm: "space-between" },
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "16px", sm: "22px" },
											mb: { xs: 0.5, sm: 0 },
											color: "#74777D",
										}}
									>
										訂單編號
									</Typography>
									<Typography
										sx={{
											fontSize: "18px",
										}}
									>
										xxx
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: { xs: "column", sm: "row" },
										width: "96%",
										justifyContent: { xs: "flex-start", sm: "space-between" },
									}}
								>
									<Typography
										sx={{
											fontSize: { xs: "16px", sm: "22px" },
											mb: { xs: 0.5, sm: 0 },
											color: "#74777D",
										}}
									>
										票卷編號
									</Typography>
									<Typography
										sx={{
											fontSize: "18px",
										}}
									>
										xxx
									</Typography>
								</Box>
							</Box>
						</Box>
					</>
				)}
			</Box>
		</PageLayout>
	);
}

export default Ticket;
