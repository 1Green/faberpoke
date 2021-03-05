import React, { FunctionComponent, InputHTMLAttributes, useState } from 'react'
import cx from 'classnames';
import Icon from "../Icon/Icon";
import './inputSearch.css';

export type InputSearchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange?: (text: string) => void;
    simple?: boolean;
    rounded?: boolean;
    color?: string;
    backgroundColor?: string;
};

export const InputSearch: FunctionComponent<InputSearchProps> = ({
    value,
    simple = false,
    rounded = false,
    onChange,
    className,
    color,
    backgroundColor,
}) => {
    const [clearButtonEnable, setClearButtonEnable] = useState<boolean>(false);
    const clearHandler = (): void => {
        onChange !== undefined && onChange('');
    }

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        evt.preventDefault();
        onChange !== undefined && onChange(evt.target.value);
    }

    const wrapperClasses = cx('input-search-wrapper', {
        'input-search-wrapper--simple': simple,
        'input-search-wrapper--rounded': rounded
    })

    const inputClasses = cx('input-search', className);

    return (
        <div style={{ backgroundColor: simple ? '' : backgroundColor }} className={wrapperClasses}>
            <Icon name='search' color={color} />
            <input
                value={value}
                onChange={changeHandler}
                style={{ color }}
                className={inputClasses}
            />
            <button
                onMouseEnter={() => setClearButtonEnable(true)}
                onMouseLeave={() => setClearButtonEnable(false)}
                onClick={clearHandler}
                className='input-search-close-button'
            >
                <Icon
                    name='close'
                    size='small'
                    color={clearButtonEnable ? 'red' : color}
                />
            </button>
        </div>
    )
}

export default InputSearch
