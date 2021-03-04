import React, { FunctionComponent } from 'react'
import { ReactComponent as SearchIcon } from '../assets/search.svg';

interface Dictionary<T> {
    [Key: string]: T;
}

const icons: Dictionary<React.FunctionComponent> = {
    "search": SearchIcon
}

interface IconProps {
    name: string;
}

const Icon: FunctionComponent<IconProps> = (props) => {
    const { name } = props;
    const CustomIcon = icons[name];

    if (CustomIcon === undefined) return null;
    return (
        <CustomIcon />
    )
}

export default Icon
