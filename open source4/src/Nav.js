import { useEffect } from 'react';
import $ from 'jquery';

function Nav(props){

	let {id, navData}=props;
	
	useEffect(() => {
		let body=document.body;
		let header=document.getElementById("header");
		let mobile=document.getElementById("mobile");
		let tab=header.querySelector(".tab");
		let dim=document.querySelector(".dim");

		let w;

		tab.addEventListener("click", function(e){
			e.preventDefault();

			body.classList.add("fixed");
			mobile.classList.add("active");
			dim.classList.add("active");
		});

		dim.addEventListener("click", function(){
			body.classList.remove("fixed");
			mobile.classList.remove("active");
			dim.classList.remove("active");
		});

		window.addEventListener("resize", function(){
			w=window.innerWidth;

			if(w > 600){
				if(mobile.classList.contains("active")){
					body.classList.remove("fixed");
					mobile.classList.remove("active");
					dim.classList.remove("active");
				}
			}
		});
	});	

	return(
		<nav id={id}>
			<ul>
				{
					navData.map((d, i) =>
						<li key={i}><a href="">{d}</a></li>
					)
				}
			</ul>
		</nav>
	);
}

export default Nav;