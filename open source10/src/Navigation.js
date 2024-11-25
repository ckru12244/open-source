import { useEffect,useState } from "react";
import axios from "axios";
import gsap from "gsap";

function Navigation () {
	const [data, setData] = useState(null);

	useEffect(() => {
	  axios.get("/data/data.json")
		.then((response) => {
			 setData(response.data);
		})
		.catch((error) => {
		 	console.log(error);
		});
	}, []);
  
	useEffect(() => {
		if (data === null) return;

		let nav=document.getElementById("nav");
		let depth1Li=nav.firstElementChild.children;
	
		for(let i=0; i<depth1Li.length; i++){
			depth1Li[i].addEventListener("mouseenter", function(e){
				let link=e.target.firstElementChild;
				link.classList.add("over");
	
				let sub=e.target.lastElementChild;
	
				gsap.fromTo(sub, { display: "block", height: 0 }, { height: "auto", duration: 0.3 });
			});
	
			depth1Li[i].addEventListener("mouseleave", function(e){
				let link=e.target.firstElementChild;
				link.classList.remove("over");
	
				let sub=e.target.lastElementChild;
	
				gsap.to(sub, { height: 0, duration: 0.3, onComplete: function(){
					if(sub.hasAttribute("style")){
						sub.removeAttribute("style");
					}
				}});
			});
	
			depth1Li[i].firstElementChild.addEventListener("focusin", function(e){
				e.target.classList.add("over");
	
				let sub=e.target.nextElementSibling;
				sub.style.display="block";
			});
	
			let depth2Li=depth1Li[i].lastElementChild.children;
	
			for(let j=0; j<depth2Li.length; j++){
				if(j === (depth2Li.length-1)){
					depth2Li[j].firstElementChild.addEventListener("focusout", function(e){
						let link=e.target.parentElement.parentElement.previousElementSibling;
						link.classList.remove("over");
	
						let sub=e.target.parentElement.parentElement;
						sub.removeAttribute("style");
					});
				}
			}
		}
	});

	if (data === null) {
		return (
		  <div className="container">
			<nav id="nav">
			  <ul>
				<p>Loading ...</p>
			  </ul>
			</nav>
		  </div>
		);
	  }
	
	  return (
		<div className="container">
		  <nav id="nav">
			<ul>
			  {data.map((d1, i) => (
				<li key={i}>
				  <a href="">{d1.depth1}</a>
				  <ul className="sub">
					{d1.depth2 && d1.depth2.map((d2, j) => (
					  <li key={j}><a href="">{d2}</a></li>
					))}
				  </ul>
				</li>
			  ))}
			</ul>
		  </nav>
		</div>
	  );
}

export default Navigation;