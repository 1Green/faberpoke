import React, { FunctionComponent } from 'react'
import Input, { InputProps } from "../Input/Input";

const SearchInput: FunctionComponent<InputProps> = (props) => {
    return (
        <div>
            <Input {...props} />
        </div>
    )
}

export default SearchInput
