import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: ${({ top }) => top}px;
    left: 0vw;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(50, 50, 50, .4);
    z-index: 2;
`;

export const Modal = styled.div`
    box-shadow: 0px 20px 25px #0000001A;
    border: 1px solid ${({ theme }) => theme.borderPrimary};
    border-radius: 5px;
    padding: 30px 40px;
    background: ${({ theme }) => theme.backgroundSecondary};
    z-index: 3;
    transform: scale(0);
    transition: 300ms;
    transition-delay: 100ms;

    ${({ show }) => show && css`
        transform: scale(1);
    `}
`;