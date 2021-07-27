import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index'
import * as serviceWorker from './serviceWorker';
import "./assets/main.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode >
  ,
  document.getElementById('root')
);


serviceWorker.unregister();
