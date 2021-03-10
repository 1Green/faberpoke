import React from 'react';
import cx from 'classnames';
import styles from './buttonimage.module.css'
import Icon, { IconProps } from '../../../Icon/Icon';
export interface ButtonImageProps extends IconProps {
  onClick: () => void;
  disabled?: boolean;
}

export function ButtonImage({ onClick, disabled, ...iconProps }: ButtonImageProps) {

  const buttonClasses = cx({
    [styles.buttonImage as string]: true,
    [styles.buttonDisabled as string]: disabled
  });
  return (
    <button
      className={buttonClasses}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon {...iconProps} />

    </button>
  )
}
