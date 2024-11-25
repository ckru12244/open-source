function AppList(props){
	let {news, category, banner}=props.propsValue;

	return(
		<div className="apps">
			<ul>
				{
					banner.map((d, i) => 
						<li key={d.idx}><a href=""><img src={"images/" + (d.src)} alt={d.src} /></a></li>
					)
				}
			</ul>
		</div>
	);
}

export default AppList;