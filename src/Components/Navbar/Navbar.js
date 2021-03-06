import React, { Component } from 'react';
import {Link} from 'react-router';

class Navbar extends Component{
	openNav(){
		document.getElementById("mySideNav").style.width = "250px";
	    document.getElementById("root").style.marginLeft = "250px";
	    document.getElementById("root").style.marginRight = "-250px";
    }
    closeNav() {
	    document.getElementById("mySideNav").style.width = "0";
	    document.getElementById("root").style.marginLeft = "0";
	    document.getElementById("root").style.marginRight = "0";
    }
		
	render(){
		return(

            <div className="col-sm-3">
                <a className="menu" onClick={this.openNav}>Menu</a>
                <nav className="sideNavMenu sidenav navbar navbar-default stretch-height" id="mySideNav">
                    <a onClick={this.closeNav} className="closebtn">&times;</a>
                    <Link to="/"> Home </Link>
                    <Link to="about"> About </Link>
                    <Link to="portfolio"> portfolio </Link>
                    <Link to="skills"> skills </Link> 
                    <img src={require('../ssh.svg')} />                   
                </nav>
            </div>
			
		)
	}
}

export default Navbar;