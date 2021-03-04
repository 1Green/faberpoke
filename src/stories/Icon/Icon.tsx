import React, { FunctionComponent } from 'react'
import { ReactComponent as SearchIcon } from './icon-svgs/search.svg';
import { ReactComponent as CloseIcon } from './icon-svgs/close.svg';
import './icon.css';

type IconKey = 'search' | 'close';

type Dictionary<T> = {
    [Key in IconKey]: T;
};

type Svg = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>

const icons: Dictionary<Svg> = {
    'search': SearchIcon,
    'close': CloseIcon
}

export interface IconProps {
    name: IconKey;
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
