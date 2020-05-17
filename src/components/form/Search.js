import React, { useState } from 'react';
import { SearchInput } from './styles';
import { IoIosSearch } from 'react-icons/io';

export const Search = ({ placeholder }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <SearchInput isFocused={isFocused}>
            <IoIosSearch />
            <input
                autoComplete='off'
                spellCheck='false'
                autoCorrect='off'
                type='search'
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </SearchInput>
    )
}
