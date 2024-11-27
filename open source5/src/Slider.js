import { useEffect, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

function Slider(props){
	let image=props.p;

	let [mySwiper, setSwiper]=useState(null);

	useEffect(() => {
		let btnList=document.querySelectorAll(".btn_group li");
		if(mySwiper === null) return;

		btnList.forEach((item, i) => {
			item.addEventListener("click", function(e){
				e.preventDefault();
				mySwiper.slideTo(i);
			})
		})
	});

	return(
		<div className="container">
			<Swiper
				className="viewer"
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
				onSwiper={swiper => {				
					setSwiper(swiper);
				}}
			>
				{
					image.map((d, i) =>
						<SwiperSlide key={i+1}><img src={"images/"+d.image} alt={"slide"+i+1} /></SwiperSlide>
					)
				}
			</Swiper>
			<ul className="btn_group">
				{
					image.map((d, i) => <li key={i+1}><a href="">{i+1}</a></li>)
				}
			</ul>
		</div>
	);
}

export default Slider;