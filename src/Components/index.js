import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';

import Wordworms from './Wordworms';
import './styles.css';
import Main from './Main';




ReactDOM.render(
	<Router history={hashHistory} >
		<Route path='/' component={App}>
		<Route path='/wordworms' component={Wordworms} />
			<IndexRoute	component={Main} />
		</Route>
	</Router>,

  document.getElementById('root')
);
