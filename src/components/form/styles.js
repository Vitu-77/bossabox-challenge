import styled, { css } from 'styled-components';

export const SearchInput = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.borderPrimary};
    background: ${({ theme }) => theme.inputBackground};
    border-radius: 5px;
    padding: 6px 8px;
    transition: 300ms;

    & > svg {
        pointer-events: none;
        font-size: 20px;
        color: ${({ theme }) => theme.darkGrey};
        margin-right: 8px;
    }

    & > input {
        height: 100%;
        flex: 1;
        outline: none;
        border: none;
        background: transparent;
        font-size: 13.5px;
        color: ${({ theme }) => theme.heading};
        
        &::placeholder{
            color: ${({ theme }) => theme.darkGrey};
            font-size: 13.5px;
        }

        &[type='search']::-webkit-search-decoration,
        &[type='search']::-webkit-search-cancel-button,
        &[type='search']::-webkit-search-results-button,
        &[type='search']::-webkit-search-results-decoration {
            -webkit-appearance:none;
        }
    }

    ${({ isFocused }) => isFocused && css`
        background: ${({ theme }) => theme.lightGrey};
        border-color: ${({ theme }) => theme.borderSecondary};
    `}
`;

export const StyledCheckBox = styled.div`
    display: flex;
    align-items: center;
    border: none;
    background: transparent;
    cursor: default;
    position: relative;

    & > input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        visibility: hidden;
        z-index: -1;
    }

    & > label {
        color: ${({ theme }) => theme.heading};
        font-size: 15px;
    }
`;

export const CheckMark = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme, checked }) => checked ? theme.primary.regular : theme.borderSecondary};
    background: ${({ theme, checked }) => checked ? theme.primary.regular : theme.inputBackground};
    margin-right: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > svg {
        color: #FFF;
    }
`;