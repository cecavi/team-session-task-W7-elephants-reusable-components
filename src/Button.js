import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className="button">
      {children}Click me!
    </button>
  )
}

export default Button;
