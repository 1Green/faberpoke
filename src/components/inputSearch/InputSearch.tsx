import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import cx from 'classnames';
import Icon from '../Icon/Icon';
import styles from './inputSearch.module.css';

export type InputSearchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange: (text: string) => void;
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
    const clearHandler = (): void => {
        onChange('');
    }

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        evt.preventDefault();
        onChange(evt.target.value);
    }

    const wrapperClasses = cx(styles.wrapper, {
        [styles.wrapperSimple as string]: simple,
        [styles.wrapperRounded as string]: rounded
    })

    const inputClasses = cx(styles.inputSearch, className);

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
                onClick={clearHandler}
                className={styles.closeButton}
            >
                <Icon
                    name='close'
                    size='small'
                    className={styles.closeIcon}
                />
            </button>
        </div>
    )
}

export default InputSearch
