import React, { FunctionComponent, FC, SVGProps } from 'react'
import cx from 'classnames';
import { ReactComponent as SearchIcon } from './iconSvgs/search.svg';
import './icon.css';

type IconKeys = 'search';
type Icons = { [key in IconKeys]: FC<SVGProps<SVGSVGElement>> } 
const icons: Icons = {
    "search": SearchIcon
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
    const iconClasses = cx(`icon--${size}`, className);

    return (
        <CustomIcon
            fill={color}
            className={iconClasses}
        />
    )
}

export default Icon;
