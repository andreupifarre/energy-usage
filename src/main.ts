import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import './main.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(React.createElement(App), document.getElementById('mount'));
});
