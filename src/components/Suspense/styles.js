import styled from 'styled-components';

export const Loading = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px !important;

    & > div {
        width: 100%;

        & > div {
            background: ${({ theme }) => theme.primary.regular};
        }
    }
`;