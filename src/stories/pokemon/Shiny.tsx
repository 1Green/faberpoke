import React, { MouseEventHandler } from 'react';
import './shiny.css';

export interface ShinyProps {
  backgroundColor?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Shiny({ backgroundColor, label, onClick }: ShinyProps) {
  return (
    <button
      type="button"
      className='pokemon-shiny-button'
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
