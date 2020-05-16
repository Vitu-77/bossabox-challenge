import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 64px 0;
    display: flex;
    justify-content: center;
    
    & > div {
        width: 40%;
        display: flex;
        flex-direction: column;

        & > * { width: 100% }

        & > header {
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;

            & > h1 {
                margin-bottom: 2px;
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
    }
`;