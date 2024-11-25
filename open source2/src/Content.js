function Content(props){	
	let {news, category, banner}=props.propsValue;

	return(
		<div className="content">
			<div className="list_wrap">
				<div className="title">
					<span>새소식</span>
					<a href="">+ 더보기</a>
				</div>
				<ul>
					{
						news.map((d, i) =>
							<li key={d.idx}>
								<a href="">{d.text}</a>
								<span>{d.date}</span>
							</li>
						)
					}
				</ul>
			</div>
			<div className="menu">
				<ul>
					{
						category.map((d, i) =>
							<li key={d.idx}><a href="">{d.text}</a></li>
						)
					}
				</ul>
			</div>
		</div>
	);
}

export default Content;