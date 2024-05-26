"use client";

import React from "react";
import Slider from "react-slick";
import HomeOrganizerCard from "./card/homeOrganizerCard";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, useTheme } from "@mui/material";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// TODO: 調整成共用元件
function HomeOrganizerCarousel() {
	return (
		<Box
			className="slider-container"
			sx={{ marginX: "100px", position: "relative", maxWidth: "1536px" }}
		>
			<Slider {...settings}>
				{testData.map((el, i) => (
					<HomeOrganizerCard key={i} {...el} />
				))}
			</Slider>
		</Box>
	);
}

// TODO: 調整程式碼寫法及樣式
function SampleNextArrow(props) {
	const { onClick } = props;
	const theme = useTheme();

	return (
		<IconButton
			sx={{
				color: theme.palette.secondary.main,
				...arrowBtnConfig,
				right: "-62px",
			}}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={faAngleRight} />
		</IconButton>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	const theme = useTheme();

	return (
		<IconButton
			sx={{
				color: theme.palette.secondary.main,
				...arrowBtnConfig,
				left: "-84px",
			}}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={faAngleLeft} />
		</IconButton>
	);
}

const arrowBtnConfig = {
	top: "45%",
	border: 1,
	position: "absolute",
	paddingX: "16px",
	paddingY: "28px",
	borderColor: "#DFE2EB",
	borderRadius: "100px",
};

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	// autoplay: true, // 自動播放
	autoplaySpeed: 3000, // 自動播放的間隔時間（毫秒）
	nextArrow: <SampleNextArrow />,
	prevArrow: <SamplePrevArrow />,
};

const testData = [
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/da08/3fb0/d6bc157bc381d454ba6ec967999440fc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qq6z~z1YE7R88O0YzLj49WN9AIgRhhsQN2VYpP8A1qcvZvubHkjuEsFwWDn9rUctDMJbz8bcaKHTZXtPuNduo3zoUsv8450Q4UweVqST30eHngZZGbZmsLMfEFd9uWqmFMma8bzpo~4UFJxK8ncWcowMaXYwkTVjMLnajjY5ekR9MaVqVjW7FH5WhbOipq5DTjrKCGut36zMH2ag5uMgMmk1rYnpI8ugpzIi5-tXl~vsV4IHu9kBnLU37SQ95YcG3n0D0vcjnsIkzBPTm2xySh6u2bcwlcTMvz5GTuyFqGobPm0J911hE89FBzt5ztc1xswTsx-iTfE8MiAspCN57g__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/52f9/cbb8/5dc33f0118f6b74a4283567629860b49?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nn9JFUfmjUBqBUXbHQwTQUJHTektBIWPtEESf69lRXcYVqUD4dmUNQjv8rZUbYSPqO8ELZAedcEww9NGp-OtaalppQCqBR6Y779Uog4Wku1h1rBbtCDSH70xKvVf92gG60aA2na9DNVaXTQt7FEbctWG-j2~EBi4inYCKNZoq5dQV7fc9MGwCSz34lKyztuBKxC7Dj59sQx7ui7aDLlnKn3C8GxKguOTe6zwko6Z3xiK0PPuV2kSTpwQxG10xBqlXiUch00U6wzWZny8CiEixJZia2MjXF3s9iKMhIv5GieqZ7vNzxmSRUeAMGR7Br~YDpuPd7xK2eu7xp7jGwCEgQ__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/bf6e/fde6/bca83eca9dc9c4fefe2404efd2c5597e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StylKCSxfaX7TAjMx-VdYrcwnuaeFAca854XZy-BDmb6Mu-l-SOy2uJQTAtTBtzupQVYOGdnHNF4g0vAI6iMtwHycmGZNoE1pREsr5IqjbwOADAUAe2iELdf0XlFcAGYGfqb2blhXcYNdiTR7qmOgbol4kbZoByzahqLRj7SduegQM8cpIPrgPhoPBQy5gJHgNnMDLBW1hj7bFUErxXhuDrQy-67ORX4NGWkZz7IIrhpDyS~ofRF-3qTmzTCroEpHphP7qYwC0M2t~f2iirgEWs4tCjB22sI~ZOhpEpesAPwYK7NJm5cLjUFj54srhQ7prS7gu78XBqzGQyW520doQ__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/dd46/c360/e794604cce7d28fb29a059e0b2664277?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OSnufagC0hpGXFsWWaQVckWhQRoXh1FL3AYRhBZWmV5cE2zrXuW8cBj~WFRpOWoTIVV8kSCzqnQ8ieblj62Q4DTvRLACKcoD4petel0QBGITwVZ~wsGz3l6aY2~RICaB-sx4z~45zuYfxbHELefqA41rySH5E9cIyKpmAGKYmYyZ9rSzo1-pugLfArH~bg0J0-v6B~1Hm~BxGND-3FYgTj7nnUeFjvK-oOd80eapHU8rq1MhP1yMuL68C7-ItYhFfRhPNc4TgejrzmUarglnaUkc1zuRwcjNfB2gVE-Pj8FuMNvUwyeH16nKDIut1wrwL4opMKKGvHrxJ172ZiuRtA__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/da08/3fb0/d6bc157bc381d454ba6ec967999440fc?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qq6z~z1YE7R88O0YzLj49WN9AIgRhhsQN2VYpP8A1qcvZvubHkjuEsFwWDn9rUctDMJbz8bcaKHTZXtPuNduo3zoUsv8450Q4UweVqST30eHngZZGbZmsLMfEFd9uWqmFMma8bzpo~4UFJxK8ncWcowMaXYwkTVjMLnajjY5ekR9MaVqVjW7FH5WhbOipq5DTjrKCGut36zMH2ag5uMgMmk1rYnpI8ugpzIi5-tXl~vsV4IHu9kBnLU37SQ95YcG3n0D0vcjnsIkzBPTm2xySh6u2bcwlcTMvz5GTuyFqGobPm0J911hE89FBzt5ztc1xswTsx-iTfE8MiAspCN57g__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/52f9/cbb8/5dc33f0118f6b74a4283567629860b49?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nn9JFUfmjUBqBUXbHQwTQUJHTektBIWPtEESf69lRXcYVqUD4dmUNQjv8rZUbYSPqO8ELZAedcEww9NGp-OtaalppQCqBR6Y779Uog4Wku1h1rBbtCDSH70xKvVf92gG60aA2na9DNVaXTQt7FEbctWG-j2~EBi4inYCKNZoq5dQV7fc9MGwCSz34lKyztuBKxC7Dj59sQx7ui7aDLlnKn3C8GxKguOTe6zwko6Z3xiK0PPuV2kSTpwQxG10xBqlXiUch00U6wzWZny8CiEixJZia2MjXF3s9iKMhIv5GieqZ7vNzxmSRUeAMGR7Br~YDpuPd7xK2eu7xp7jGwCEgQ__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/bf6e/fde6/bca83eca9dc9c4fefe2404efd2c5597e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StylKCSxfaX7TAjMx-VdYrcwnuaeFAca854XZy-BDmb6Mu-l-SOy2uJQTAtTBtzupQVYOGdnHNF4g0vAI6iMtwHycmGZNoE1pREsr5IqjbwOADAUAe2iELdf0XlFcAGYGfqb2blhXcYNdiTR7qmOgbol4kbZoByzahqLRj7SduegQM8cpIPrgPhoPBQy5gJHgNnMDLBW1hj7bFUErxXhuDrQy-67ORX4NGWkZz7IIrhpDyS~ofRF-3qTmzTCroEpHphP7qYwC0M2t~f2iirgEWs4tCjB22sI~ZOhpEpesAPwYK7NJm5cLjUFj54srhQ7prS7gu78XBqzGQyW520doQ__",
		star: 4,
	},
	{
		title: "複寫呢喃，為你成篇",
		organizer: "Andy D schwarzenegger",
		chips: ["水肺", "衝浪", "越野跑"],
		image:
			"https://s3-alpha-sig.figma.com/img/dd46/c360/e794604cce7d28fb29a059e0b2664277?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OSnufagC0hpGXFsWWaQVckWhQRoXh1FL3AYRhBZWmV5cE2zrXuW8cBj~WFRpOWoTIVV8kSCzqnQ8ieblj62Q4DTvRLACKcoD4petel0QBGITwVZ~wsGz3l6aY2~RICaB-sx4z~45zuYfxbHELefqA41rySH5E9cIyKpmAGKYmYyZ9rSzo1-pugLfArH~bg0J0-v6B~1Hm~BxGND-3FYgTj7nnUeFjvK-oOd80eapHU8rq1MhP1yMuL68C7-ItYhFfRhPNc4TgejrzmUarglnaUkc1zuRwcjNfB2gVE-Pj8FuMNvUwyeH16nKDIut1wrwL4opMKKGvHrxJ172ZiuRtA__",
		star: 4,
	},
];

export default HomeOrganizerCarousel;