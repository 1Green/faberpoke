import React, { FC, SVGProps } from 'react';
import styles from './buttonimage.module.css'
import { ReactComponent as MaleIcon } from '../svg/male.svg';
import { ReactComponent as FemaleIcon } from '../svg/female.svg';
import { ReactComponent as ShinyIcon } from '../svg/shiny.svg';
import { ReactComponent as OrientationIcon } from '../svg/return.svg';
import { Gender } from '../Pokemon';

type IconKeys = 'default' | 'female' | 'shiny' | `orientation`;
type Icons = { [key in IconKeys]: FC<SVGProps<SVGSVGElement>> }
const icons: Icons = {
  'default': MaleIcon, 'female': FemaleIcon, 'shiny': ShinyIcon, 'orientation': OrientationIcon,
}

export type ButtonColors = '#CACACA' | 'black';
export interface ButtonImageProps {
  name: IconKeys;
  gender?: Gender;
  shiny?: boolean;
  onClick: () => void;
}

export function ButtonImage({ name, gender, shiny, onClick }: ButtonImageProps) {
  const CustomIcon = icons[name];

  let color: ButtonColors = 'black';
  let disabled = false;
  if (gender !== undefined) {
    color = gender === name ? 'black' : '#CACACA'
    disabled = color === 'black' ? true : false
  }

  if (shiny !== undefined) {
    color = shiny ? 'black' : '#CACACA'
  }

  return (
    <button
      className={styles.buttonImage}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <CustomIcon fill={color} className={styles.imageInside} />

    </button>
  )
}
