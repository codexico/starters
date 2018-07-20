// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'));
import _ from 'lodash'
import './style.css'

function component () {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hellossss', 'webpack'], ' ')
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())
