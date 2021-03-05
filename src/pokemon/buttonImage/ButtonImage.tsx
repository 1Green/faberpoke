import React from 'react';
import styles from './buttonimage.module.css'

export interface ButtonImageProps {
  image: 'orientation' | 'gender' | 'shiny';
  onClick: () => void;
}
const imageDico = {
  orientation: `${process.env.PUBLIC_URL}/img/orientation.png`,
  gender: `${process.env.PUBLIC_URL}/img/gender.png`,
  shiny: `${process.env.PUBLIC_URL}/img/shiny.png`,

}

export function ButtonImage({ image, onClick }: ButtonImageProps) {

  const imageUrl: string = imageDico[image];

  return (
    <button
      className={styles.buttonImage}
      type="button"
      onClick={onClick}
    >
      <img className={styles.ImageInside} src={imageUrl} alt={`${image} button`} />

    </button>
  )
}
