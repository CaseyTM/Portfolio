import React, { Component } from 'react';

class Projects extends Component{
	render(){
		return(
			<div>
				this is the weight {this.props.params.weight}
				<br />
				this is the height {this.props.params.height}
			</div>

		);
	}
}

export default Projects;