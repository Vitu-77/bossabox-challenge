import styled from 'styled-components';

export const Tool = styled.li`
    width: 100%;
    height: 40px;
    background: #dedede;

    & + li {
        margin-top: 16px;
    }
`;