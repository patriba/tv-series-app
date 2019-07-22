import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//both are correct - same result
// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }
const getCurrentDate = function() {
    const date = new Date();
    return date.toDateString();
}

//both are correct - same result
//const greeting = React.createElement('h1', {}, 'Hello World!');
const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>;

ReactDOM.render(greeting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
