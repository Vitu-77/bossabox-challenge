import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Input as StyledInput, TextArea as StyledTextArea } from './styles';

export const Input = ({ name, label, width, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <StyledInput className='input' width={width}>
            <label htmlFor={name}>{label}</label>
            <input autoComplete='off' ref={inputRef} name={name} defaultValue={defaultValue} {...rest} />
        </StyledInput>
    )
}

export const TextArea = ({ name, label, width, ...rest }) => {
    const textAreaRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textAreaRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <StyledTextArea className='input' width={width}>
            <label htmlFor={name}>{label}</label>
            <textarea autoComplete='off' ref={textAreaRef} name={name} defaultValue={defaultValue} {...rest}></textarea>
        </StyledTextArea>
    )
}

