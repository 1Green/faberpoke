import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import Icon from 'stories/icon/Icon';
import './input-search.css';

export type InputSearchProps = InputHTMLAttributes<HTMLInputElement> & {
    // iconProps?: Omit<IconProps, 'name'>;
};

export const InputSearch: FunctionComponent<InputSearchProps> = ({
    value,
    onChange,
    className,
    ...rest
}) => {
    return (
        <div className='input-search-wrapper'>
            <Icon name='search' />
            <input
                value={value}
                onChange={onChange}
                className={['input-search', className].join(' ')}
                {...rest}
            />
            <Icon name='close' size='small' color='red' />
        </div>
    )
}

export default InputSearch
