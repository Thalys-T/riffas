import React from 'react';
import './Button.scss';

interface ButtonProps {
  tittle: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
        {props.tittle}
    </button>
  )
}

export default Button;