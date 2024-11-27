import { useState } from 'react';
import ProductBanner from './ProduceBanner';
import data from './data';
import './css/style.css';

function App(){
	let [count, setCount]=useState(3);

	let moreProduct=e => {
		e.preventDefault();
		
		if(count < data.length){
			count+=3;

			setCount(count);
		}
	};

	return(
		<div className="wrapper">
			<section id="portfolio">
				<div className="inner">
					<div className="title">
						<h3>OUR PORTFOLIO</h3>
					</div>
					<div className="content">
						<div className="banner">
							<ul>
								{
									data.map((d, i) => {
										if(i < count){
											return (<ProductBanner key={i+1} propsValue={d} />);
										}
									})
								}
							</ul>
						</div>
					</div>
					<a href="" className="more" onClick={moreProduct}>More</a>
				</div>
			</section>
		</div>
	);
}

export default App;