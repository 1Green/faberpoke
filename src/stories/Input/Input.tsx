import React, { FunctionComponent, InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: FunctionComponent<InputProps> = (props) => {
    const { value, onChange } = props;

    return (
        <input value={value} onChange={onChange} />
    )
}

export default Input
