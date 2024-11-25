import { useEffect } from "react";
import gsap from "gsap";

function VideoContent (){
	useEffect(() =>{
		let container=document.querySelector(".container");
		let video=document.getElementById("my_video");
		let btn;
	
		for(var item of container.children){
			if(item.tagName === "A"){
				btn=item;
			}
		}
	
		btn.addEventListener("click", function(e){
			e.preventDefault();
	
			gsap.to(btn, { opacity: 0, duration: 0.3, onComplete: function(){
				btn.style.display="none";
				video.play();
			}});
		});
	
		video.addEventListener("click", function(){
			if(video.paused) return;
	
			gsap.fromTo(btn, { display: "block", opacity: 0}, {opacity: 0.8, duration: 0.3, onComplete: function(){
				video.pause();
			}});
		});
	
		video.addEventListener("ended", function(){
			gsap.fromTo(btn, { display: "block", opacity: 0}, {opacity: 0.8, duration: 0.3, onComplete: function(){
				video.pause();
				video.currentTime=0;
			}});
		});
	});

	return(
		<div className="container">
			<a href="" className="control">control</a>
			<video id="my_video" src="video/seoul.mp4"></video>
		</div>
	);
}

export default VideoContent;