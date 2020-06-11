import React, { useState } from 'react';
import { SearchInput } from './styles';
import { IoIosSearch } from 'react-icons/io';

export const Search = ({ placeholder, loading, ...rest }) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<SearchInput isFocused={isFocused}>
			{loading ? 'L' : <IoIosSearch />}
			<input
				{...rest}
				autoComplete='off'
				spellCheck='false'
				autoCorrect='off'
				type='search'
				placeholder={placeholder}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</SearchInput>
	);
};
