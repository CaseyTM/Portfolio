import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Wordworms from './Components/Wordworms';
// import './Components/styles.css';
import Main from './Components/Main';
import Project2 from './Components/Project2';



ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>
			<IndexRoute	component={Main} />
			<Route path='wordworms' component={Wordworms} />
			<Route path='project2/:height/:weight' component={Project2} />
			<Route path='project2' component={Project2} />
		</Route>
	</Router>,

  document.getElementById('root')
);
