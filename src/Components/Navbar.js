import React, { Component } from 'react';
import $ from 'jquery';



class Navbar extends Component{
	render(){
		return(
			<div className="page">
				<span className="menu_toggle">
					<i className="menu_open fa fa-bars fa-lg"></i>
					<i className="menu_close fa fa-times fa-lg"></i>
			  	</span>
			    <ul className="menu_items">
					<li><a href="#"><i className="icon fa fa-signal fa-2x"></i> Moar</a></li>
					<li><a href="#"><i className="icon fa fa-coffee fa-2x"></i> Coffee</a></li>
					<li><a href="#"><i className="icon fa fa-heart fa-2x"></i> Please</a></li>
				</ul>
				<main className="content">
					<div className="content_inner">
						<h1>The mysterious red button of doom</h1>
						<p>Do <strong>not</strong> push that big, red button in the corner. People will die. You have been warned. Do&hellip; not do it.</p>
					
						<p>First Paragraph</p>
				  
						<p>Second Paragraph</p>
				  
						<p>Third Paragraph</p>
					</div>
			  	</main>
			</div>
		)
	}
}

var $page = $('.page');

$('.menu_toggle').on('click', function(){
	$page.toggleClass('shazam');
});
$('.content').on('click', function(){
	$page.removeClass('shazam');
});

export default Navbar;