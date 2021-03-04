import React, { FunctionComponent, FC, SVGProps } from 'react'
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
    ...rest
}) => {
    const CustomIcon = icons[name];

    return (
        <CustomIcon
            fill={color}
            className={[className, `icon--${size}`].join(' ')}
            {...rest}
        />
    )
}

export default Icon;
