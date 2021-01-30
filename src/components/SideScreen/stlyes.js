import styled from 'styled-components'

export const Navigation = styled.nav`

    width: 30%;
    max-width: 300px;
    height: 100vh;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-right: 2px solid #dfe6e9;

    p {
        padding-top: 2rem;
    }

    ul {
        display: flex;
        flex-direction: column;

        margin-top: 6rem;
    }

    li {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        transition: 0.5s;
        color: #747d8c;

        &:hover {
            background-color: #f1f2f6;
            border-radius: 7px;
            color: #6c5ce7;
        }

    }

    span {
        padding-right: 1rem;

    }

    button {
        margin-top: 8rem;
        background-color: #f1f2f6;
        border-radius: 8px;
        min-width: 5rem;
        width: 10rem;
        height: 3rem;
        border: none;
        color: #6c5ce7;
    }

`