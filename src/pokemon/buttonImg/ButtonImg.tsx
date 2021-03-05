import React from 'react';
import styles from './buttonimg.module.css'
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

  const imgUrl: string = imgDico[img];

  return (
    <button
      className={styles.buttonimg}
      type="button"
      onClick={onClick}
    >
      <img className={styles.imginside} src={imgUrl} alt={`${img} button`} />

    </button>
  )
}
