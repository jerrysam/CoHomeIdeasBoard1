import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
// import 'jquery';
global.jQuery = require('jquery');
require('bootstrap');
window.jquery = window.$ = global.jquery

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
