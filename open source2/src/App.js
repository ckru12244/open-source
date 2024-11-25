import './css/style.css';
import Content from './Content';
import AppList from './AppList';
import data from './data';

function App(){
	return(
		<div className="wrapper">
			<Content propsValue={data} />
			<AppList propsValue={data} />
		</div>
	);
}

export default App;