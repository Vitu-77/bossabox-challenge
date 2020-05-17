import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 64px 0;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.backgroundPrimary};
    
    & > div {
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