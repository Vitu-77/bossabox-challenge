import styled from 'styled-components';

export const Tool = styled.li`
    width: 100%;
    background: ${({ theme }) => theme.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.borderPrimary};
    padding: 12px;
    border-radius: 5px;

    & > header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        & > a {
            cursor: pointer;

            & > h3 {
                font-size: 20px;
                color: ${({ theme }) => theme.heading};
                font-weight: 600;

                &:hover {
                    color: ${({ theme }) => theme.primary.regular};
                }
            }
        }

        & > button {
            outline: none;
            padding: 2px 10px;
            border: none;
            background: ${({ theme }) => `${theme.danger.regular}10`};
            font-size: 14px;
            border-radius: 5px;
            color: ${({ theme }) => theme.danger.regular};
            cursor: pointer;
            font-weight: 600;
            display: flex;
            align-items: center;

            & > svg {
                font-size: 24px;
            }

            &:hover {
                background: ${({ theme }) => `${theme.danger.regular}30`};
            }

            &:focus {
                background: ${({ theme }) => `${theme.danger.regular}50`};
            }
        }

    }

    & > p.description {
        width: 100%;
        word-wrap: break-word;

        color: ${({ theme }) => theme.heading};
        font-size: 15px;
        padding: 5px 0 0 0;
    }

    & + li {
        margin-top: 16px;
    }
`;

export const Tags = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;

    & > span {
        margin: 0 2px;
        padding: 4px 10px;
        border-radius: 5px;
        color: ${({ theme }) => theme.primary.regular};
        background: ${({ theme }) => `${theme.primary.regular}10`};
        font-size: 13px;
        cursor: pointer;
        position:relative;

        &:hover {
            background: ${({ theme }) => `${theme.primary.regular}30`};

            &:after {
                opacity: .7;
            }
        }

        &:after {
            width: max-content;
            content: attr(tooltip);
            position: absolute;
            top: 160%;
            left: 50%;
            border-radius: 2px;
            transform: translateX(-50%);
            padding: 4px 6px;
            font-size: 12px;
            background: ${({ theme }) => theme.heading};
            color: #FFF;
            opacity: 0;
            transition: 300ms;
            transition-delay: 200ms;
        }
    }
`;