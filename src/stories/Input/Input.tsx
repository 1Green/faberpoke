import React, { FunctionComponent, InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: FunctionComponent<InputProps> = (props) => {
    return (
        <input {...props} />
    )
}

export default Input
