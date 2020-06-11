import React from 'react';
import PropTypes from 'prop-types';

import { StyledPrimaryButton, StyledSecondaryButton } from './styles';

const PrimaryButton = ({ children, color, ...rest }) => {
	return (
		<StyledPrimaryButton color={color || 'primary'} {...rest}>
			{children}
		</StyledPrimaryButton>
	);
};

const SecondaryButton = ({ children, color, ...rest }) => {
	return (
		<StyledSecondaryButton color={color || 'primary'} {...rest}>
			{children}
		</StyledSecondaryButton>
	);
};

PrimaryButton.propTypes = {
	color: PropTypes.oneOf(['primary', 'sucess', 'danger', 'warning']),
	children: PropTypes.any,
};

SecondaryButton.propTypes = {
	color: PropTypes.oneOf(['primary', 'sucess', 'danger', 'warning']),
	children: PropTypes.any,
};

export { PrimaryButton, SecondaryButton };
