import React, { FunctionComponent, FC, SVGProps } from 'react'
import cx from 'classnames';
import { ReactComponent as SearchIcon } from './iconSvgs/search.svg';
import { ReactComponent as MaleIcon } from './iconSvgs/male.svg';
import { ReactComponent as FemaleIcon } from './iconSvgs/female.svg';
import { ReactComponent as ShinyIcon } from './iconSvgs/shiny.svg';
import { ReactComponent as OrientationIcon } from './iconSvgs/return.svg';
import { ReactComponent as PokeballCardIcon } from './iconSvgs/pokeballcard.svg';
import styles from './icon.module.css';

type IconKeys = 'search' | 'default' | 'female' | 'shiny' | 'orientation' | 'pokeball';
type Icons = { [key in IconKeys]: FC<SVGProps<SVGSVGElement>> }
export const icons: Icons = {
    "search": SearchIcon, "default": MaleIcon, "female": FemaleIcon, "shiny": ShinyIcon, "orientation": OrientationIcon, "pokeball": PokeballCardIcon,
}

export interface IconProps {
    name: IconKeys;
    color?: string;
    size?: 'small' | 'medium' | 'large' | 'button' | 'pokeball';
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
    const iconClasses = cx(styles[`icon--${size}`], className);

    return (
        <CustomIcon
            fill={color}
            className={iconClasses}
        />
    )
}

export default Icon;
