import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { SearchInput } from './styles';
import { IoIosSearch } from 'react-icons/io';

export const Search = ({ placeholder, name, ...rest }) => {
	const inputRef = useRef(null);
	const { fieldName, registerField } = useField(name);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: 'value',
		});
	}, [fieldName, registerField]);

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<SearchInput isFocused={isFocused}>
			<IoIosSearch />
			<input
				{...rest}
				name={name}
				ref={inputRef}
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
