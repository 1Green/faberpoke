import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import classNames from "classnames";
import Icon, { IconProps } from 'stories/icon/Icon';
import './iconButton.css';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconProps: IconProps;
    rounded?: boolean;
    simple?: boolean;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
    iconProps,
    rounded,
    simple,
    onClick
}) => {
    const iconButtonClasses = classNames({
        'icon-button': true,
        'icon-button--rounded': rounded,
        'icon-button--simple': simple
    })

    return (
        <button onClick={onClick} className={iconButtonClasses}>
            <Icon {...iconProps} />
        </button>
    )
}

export default IconButton
