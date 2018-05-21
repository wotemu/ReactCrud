import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import { normalize } from 'uri-js';





const appRoot = document.getElementById('root');
ReactDOM.render(<IndecisionApp />, appRoot);

//yarn run dev-server

