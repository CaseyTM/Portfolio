import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import About from './Components/About/About';
// import './Components/styles.css';
import Main from './Components/Main';
import Portfolio from './Components/Portfolio/Portfolio';
import Skills from './Components/Skills/Skills';



ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>
			<IndexRoute	component={Main} />
			<Route path='about' component={About} />
			<Route path='portfolio' component={Portfolio} />
			<Route path='skills' component={Skills} />
		</Route>
	</Router>,

  document.getElementById('root')
);
