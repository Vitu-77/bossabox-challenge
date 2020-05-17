import styled from 'styled-components';

export const PrimaryButton = styled.button`
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-size: 14px;
    padding: 10px 24px;
    outline: none;
    background: ${({ theme, color }) => theme[color].regular};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        ${({ theme, color }) => theme[color].hover};
    }

    &:focus {
        ${({ theme, color }) => theme[color].click};
    }

    & > svg {
        font-size: 20px;
        color: #FFF;
        margin-right: 8px;
    }
`;