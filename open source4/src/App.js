import Nav from './Nav';
import './css/style.css';
import data from './data';

function App(){
	return(
		<div className="wrapper">	
			<header id="header">				
				<Nav id={data.device[0]} navData={data.depth1}/>	
				<Nav id={data.device[1]} navData={data.depth1}/>	
				<a href="" className="tab">tab</a>
			</header>
			<div className="dim"></div>
		</div>
	);
}

export default App;