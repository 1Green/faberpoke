import React, { FunctionComponent, InputHTMLAttributes } from 'react'

export type InputSearchProps = InputHTMLAttributes<HTMLInputElement>;

const InputSearch: FunctionComponent<InputSearchProps> = ({
    value,
    onChange
}) => {
    return (
        <div>
           <input value={value} onChange={onChange} /> 
        </div>
    )
}

export default InputSearch
