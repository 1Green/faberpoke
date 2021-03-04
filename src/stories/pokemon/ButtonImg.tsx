import React from 'react';

export interface ButtonImgProps {
  img: 'orientation' | 'gender' | 'shiny';
  onClick: () => void;
}
const imgDico = {
  orientation: `${process.env.PUBLIC_URL}/img/orientation.png`,
  gender: `${process.env.PUBLIC_URL}/img/gender.png`,
  shiny: `${process.env.PUBLIC_URL}/img/shiny.png`,

}

export function ButtonImg({ img, onClick }: ButtonImgProps) {

  const imgUrl = imgDico[img];

  return (
    <button
      className={`pokemon-button-${img}`}
      type="button"
      onClick={onClick}
    >
      <img src={imgUrl} alt={`${img} button`} />
    </button>
  )
}
