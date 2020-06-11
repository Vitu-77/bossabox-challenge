import styled from 'styled-components';

export const List = styled.ul`
	padding-top: 12px;
`;

export const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;

	& > div {
		width: 100%;
		display: flex;
		align-items: center;

		&:nth-child(1) {
			justify-content: flex-start;
			font-size: 20px;
			font-weight: 600;
			color: ${({ theme }) => theme.heading};
			margin-bottom: 20px;
			display: flex;
			align-items: flex-end;
			transform: translateX(-5px);

			& > svg {
				color: ${({ theme }) => theme.heading};
				font-size: 25px;
				margin-right: 8px;
			}
		}
		&:nth-child(2) {
			justify-content: flex-start;

			& > p {
				color: ${({ theme }) => theme.heading};
				font-size: 15px;
			}
		}
		&:nth-child(3) {
			justify-content: flex-end;
			margin-top: 24px;

			& > button:first-child {
				margin-right: 8px;
			}
		}
	}
`;
