import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Contents() {
	const product=useSelector(state => state.product);
  	const [count, setcount] = useState(0);

	useEffect(() => {
		let btn =document.querySelectorAll(".btn div");

		btn.forEach((d, i) => {
			d.addEventListener("click", function(e){
				e.preventDefault();

				if(i === count) return;

				setcount(i);
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

	const productGroup = product.slice(count * 4, (count + 1) * 4);

	return (
		<div className="contents">
			<div className="products">
				<ul>
					{
						productGroup.map((d, i) => {
							return <ProductList key={i} pdl={d}/>
						})
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

function ProductList({pdl}) {
	const { image, idx, title, sale, dollar, won } = pdl;
	return (
		<li>
			<a className="img">
				<img src={"images/"+image} alt={"product"+idx} />
			</a>
			<div className="desc">
				<a href="" className="title">
					{title}
				</a>
				<div className="price">
					<span className="sale">{sale}</span>
					<span className="dollar">{dollar}</span>
				</div>
				<span className="won">{won}</span>
			</div>
		</li>
	);
}

export default Contents;