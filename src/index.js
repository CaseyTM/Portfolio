import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Aboutme from './Components/Aboutme';
// import './Components/styles.css';
import Main from './Components/Main';
import Projects from './Components/Projects';



ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>
			<IndexRoute	component={Main} />
			<Route path='aboutme' component={Aboutme} />
			<Route path='projects' component={Projects} />
		</Route>
	</Router>,

  document.getElementById('root')
);
