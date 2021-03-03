import React, { MouseEventHandler } from 'react';
import './button.css';

export interface ButtonProps {
  className: string;
  backgroundColor?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ className, backgroundColor, label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`pokemon-${className}-button`}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
