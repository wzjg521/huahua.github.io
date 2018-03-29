alert('123')
import React from 'react';
alert(React)
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './style/base.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
debugger;

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
