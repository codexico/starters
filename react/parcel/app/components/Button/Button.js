import React from 'react';

const Button = (props) => (
  <button
    className="Button"
    type={props.type}
    asdf={props.asdf}
  >
    {props.text}
  </button>
);

export default Button;
