import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/global-styles.css';
import { Home } from './templates/Home/Index';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
