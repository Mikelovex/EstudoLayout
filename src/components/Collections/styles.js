import styled from 'styled-components'


export const Container = styled.div`
    width: 70%;
`

export const Navigation = styled.div`
    width: 70rem;
    margin: 2rem 0 0 2rem;
    display: flex;
    justify-content: space-between;

    button {
        width: 20rem;
        height: 3rem;
        border-radius: 8px;
        background-color: #f1f2f6;
        border: none;
        text-align: initial;
        padding-left: 1rem;
    }
`


export const Cards = styled.div`
    display: flex;
`

export const Card = styled.div `

    width: 16rem;
    height: 16rem;

    margin: 4rem 0 0 2rem;

    background-color: #f1f2f6;

    border-radius: 8px;

    img {
        margin: 1rem 0 0 1rem;
        height: 8rem;
        width: 14rem;
        border-radius: 8px;
    }

    h3 {
        margin: 1rem 0 0 1.4rem;
    }

    p {
        margin: 0.5rem 0 0 1.4rem;
    }

`