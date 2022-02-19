import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

//import App from './tutorial_1/App';
//import App from './tutorial_2/App';
//import App from './tutorial_3/App';
//import App from './tutorial_4/App';
//import App from './tutorial_5/App';
//import App from './tutorial_6/App';
import App from './tutorial_6_new/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
