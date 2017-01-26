import React, { Component } from 'react';
import Navbar from './Navbar';
import '../styles.css'

class App extends Component {
	render() {
	    return (
	    	<div className="App">
	    		<Navbar />
	      		{this.props.children}
	    	</div>
	    );
	}
}

export default App;
