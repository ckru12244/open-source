import './css/style.css'
import Slider from './Slider';
import data from "./data";

function App(){
	return(
		<>
			<h1 className="title">CASE5</h1>
			<Slider p={data}/>
		</>
	);
}

export default App;