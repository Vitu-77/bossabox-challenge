import React from 'react';
import { Form as Unform } from './styles';

export const Form = React.forwardRef(({ children, ...rest }, ref) => {
    return <Unform {...rest} ref={ref}>{children}</Unform>
});