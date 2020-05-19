import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 64px 0;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.backgroundPrimary};
    
    & > div.tools {
        width: 45%;
        display: flex;
        flex-direction: column;

        & > header {
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;

            & > h1 {
                margin-bottom: 2px;
                font-size: 30px;
                color: ${({ theme }) => theme.heading};
            }

            & > h3 {
                font-size: 20px;
                font-weight: 400;
                color: ${({ theme }) => theme.heading};
            }
        }
    }
`;

export const Toolbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > form {
        display: flex;
        width: max-content;

        & > div:first-child {
            margin-right: 6px;
        }
    }
`;

export const ModalTitle = styled.h3`
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
`;

export const ModalButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 15px;
`;