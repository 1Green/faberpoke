import React, { FunctionComponent, FC, SVGProps } from 'react'
import cx from 'classnames';
import { ReactComponent as SearchIcon } from './iconSvgs/search.svg';
import { ReactComponent as CloseIcon } from './iconSvgs/close.svg';
import { capitalizeFirstLetter } from 'utils';
import styles from './icon.module.css';

type IconKeys = 'search' | 'close';
type Icons = { [key in IconKeys]: FC<SVGProps<SVGSVGElement>> } 
const icons: Icons = {
    'search': SearchIcon,
    'close': CloseIcon
}

export interface IconProps {
    name: IconKeys;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    style?: React.CSSProperties;
    className?: string;
}

export const Icon: FunctionComponent<IconProps> = ({
    name,
    color,
    className,
    size = 'medium',
}) => {
    const CustomIcon = icons[name];
    const iconClasses = cx(styles.icon, styles[`icon${capitalizeFirstLetter(size)}`], className);

    return (
        <CustomIcon
            fill={color}
            className={iconClasses}
        />
    )
}

export default Icon;
