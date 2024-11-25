import { useEffect, useState } from "react";
import { data } from "./data";

function Contents() {
  const [num, setList] = useState(0);

	useEffect(() => {
		let btn =document.querySelectorAll(".btn div");

		btn.forEach((d, i) => {
			d.addEventListener("click", function(e){
				e.preventDefault();

				if(i === num) return;

				setList(i);
				btn.forEach((d2, j) => {
					if(j === i){
						d2.classList.add("on");
					}
					else{					
						d2.classList.remove("on");
					}
				});
			});
		});
	})

  return (
    <div className="contents">
      	<div className="products">
			<ul>
				{
					data[num].map((d, i) => (
						<li key={i}>
							<a className="img">
							<img src={"images/"+d.image} alt={"product"+i + 1} />
							</a>
							<div className="desc">
								<a href="" className="title">
									{d.title}
								</a>
								<div className="price">
									<span className="sale">{d.sale}</span>
									<span className="dollar">{d.dollar}</span>
								</div>
								<span className="won">{d.won}</span>
							</div>
						</li>
					))
				}
			</ul>
      	</div>
     	<div className="btn">
			<div className="on">버튼1</div>
			<div>버튼2</div>
      	</div>
    </div>
  );
}

export default Contents;