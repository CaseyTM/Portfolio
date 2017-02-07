import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import '../styles.css';

class App extends Component {
	render() {
	    return (
	    	<div className="app col-sm-3">
	    		<Navbar />
	      		{this.props.children}
	    	</div>
	    )
	}
}

export default App
