import React, { MouseEventHandler } from 'react';
import './button.css';

export interface ButtonProps {
  backgroundColor?: string;
  imgUrl?: string;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ backgroundColor, imgUrl, label, onClick }: ButtonProps) {
  if (imgUrl === undefined) {
    imgUrl = ""
  }
  const styleButton = {
    backgroundColor: backgroundColor,
    backgroundImage: `url(${imgUrl})`,
  }
  return (
    <button
      type="button"
      style={styleButton}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
