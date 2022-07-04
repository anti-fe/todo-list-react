import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Circle from './components/Circle/Circle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Circle 
    w='362px'
    h='362px'
    c1='#D3FFEA'
    c2='#ABFAFF'
    posX='200px'
    posY='0px'
    />
    <Circle 
    w='486px'
    h='486px'
    c1='#75DEFF'
    c2='#CDF8FB'
    posX='0px'
    posY='495px'
    />
  </React.StrictMode>
);

