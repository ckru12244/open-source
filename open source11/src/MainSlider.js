import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import data from "./data";

function MainSlider(){
	const [current, setCurrent]=useState(1);
	const [total, setTotal]=useState(0);

	return(
		<div className="main_slider">
			<Swiper
				loop={true}
				speed={1200}
				autoplay={{
					delay: 5000
				}}
				modules={[Autoplay]}
				onInit={(swiper) => {
					setCurrent(swiper.realIndex + 1);
					setTotal(swiper.slides.length);
				}}
				onSlideChange={(swiper) => {
					setCurrent(swiper.realIndex + 1);
				}}
				className="swiper-container"
			>
				{data.map((d, i) =>
					<SwiperSlide key={i}>
						<SliderList p={d}/>
					</SwiperSlide>
				)}
			</Swiper>
			<div className="account">
				<span className="current">{current}</span> / <span className="total">{total}</span>
			</div>
			<div className="icon_scroll">
				<div className="icon_box">
					<img src="images/icon_scroll.png" alt="icon scroll" />
				</div>
			</div>
		</div>
	);
}

function SliderList (props){
	let {span, p, img, alt}=props.p;
	return(
		<>
			<div className="text_box">
				<span>{span}</span>
				{p.map((e, j) =>
					<p key={j}>{e}</p>
				)}
				<a href="">View More +</a>
			</div>
			<img src={"images/"+img} alt={alt} />
		</>
	);
}

export default MainSlider;