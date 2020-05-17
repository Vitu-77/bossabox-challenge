import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton as StyledPrimaryButton } from './styles';

export const PrimaryButton = ({ children, color, ...rest }) => {
    return (
        <StyledPrimaryButton color={color || 'primary'} {...rest}>
            {children}
        </StyledPrimaryButton>
    )
}

PrimaryButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'sucess', 'danger', 'warning']),
    children: PropTypes.any
}