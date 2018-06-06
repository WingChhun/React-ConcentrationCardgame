import React from 'react';
import ReactDOM from 'react-dom';
//! Import css and font-awesome
import './index.css';
import "./node_modules/font-awesome/css/font-awesome.min.css";

//! Import Components
import App from './App';
import Router from "./container/Router";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
