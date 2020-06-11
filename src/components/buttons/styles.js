import styled from 'styled-components';

export const StyledPrimaryButton = styled.button`
	border: none;
	border-radius: 5px;
	color: #fff;
	font-size: 14px;
	padding: 10px 24px;
	outline: none;
	background: ${({ theme, color }) => theme[color].regular};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: ${({ theme, color }) => theme[color].hover};
	}

	&:focus {
		background: ${({ theme, color }) => theme[color].click};
	}

	& > svg {
		font-size: 20px;
		color: #fff;
		margin-right: 8px;
	}
`;

export const StyledSecondaryButton = styled.button`
	border: none;
	border-radius: 5px;
	color: ${({ theme, color }) => theme[color].regular};
	font-size: 14px;
	padding: 10px 24px;
	outline: none;
	background: ${({ theme, color }) => `${theme[color].regular}15`};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: ${({ theme, color }) => `${theme[color].hover}25`};
	}

	&:focus {
		background: ${({ theme, color }) => `${theme[color].click}35`};
	}

	& > svg {
		font-size: 20px;
		color: ${({ theme, color }) => theme[color].regular};
		margin-right: 8px;
	}
`;
