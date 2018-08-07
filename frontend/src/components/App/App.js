import React, { Component } from 'react';
import BodyData from '../../components/BodyData/bodyData';
import '../../App.css';


class App extends Component {
	render() {
		return (
		<div className="App">
			<div>
				<h3>This is me trying to learn ReactJS, by working on a site that is supposed to search for restaurants and render them as you type them into a form</h3>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<div className="searchForm">
				<BodyData/>
			</div>
		</div>
		);
	}
}

export default App;
