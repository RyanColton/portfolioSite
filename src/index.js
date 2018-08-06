import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import App from './App';
import Clones from "./WebsiteClones/clones"
import Anthropologie from './WebsiteClones/Anthropologie/anthropologie'
import Gnome from './WebsiteClones/googleGnome/gnome'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route component={Clones}>
      <Route path='/clones/anthropologie' component={Anthropologie}/>
      <Route path='/clones/google-gnome' component={Gnome}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
