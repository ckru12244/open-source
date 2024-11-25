import data from "./data";

function Table (){
	return(
		<div className="tb1">
			<form>
				<input type="text" value="제목+내용" /> 
				<input type="button" value="검색" /> 
			</form>
			<table>
				<thead>
					<tr>
						<th scope="row" className="num">번호</th>
						<th scope="row" className="icon">구분</th>
						<th scope="row" className="title">제목</th>
						<th scope="row" className="date">등록일</th>
					</tr>
				</thead>
				<tbody>
					{data.map(d => 
						<Td1 key={d.idx} propsValue={d}></Td1>
					)}
				</tbody>
			</table>
		</div>
	);
}

function Td1 (a){

	let {idx, num, text, date}=a.propsValue;
	
	return(		
		<tr>
			<td className="num">{num}</td>
			<td className="icon"><img src="images/news_notice_icon.gif" alt="icon" /></td>
			<td className="title"><a href="">{text}</a></td>
			<td className="date">{date}</td>
		</tr>
	);
}

export default Table;