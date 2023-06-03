import React from 'react';
import ReactDOM from 'react-dom/client';
import Age from '../src/components/age'
import TicTacToe from '/home/yofi/react/myapp/src/components/tictactoe.js'
import AjaxApi from './components/ajax';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AjaxApi />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

