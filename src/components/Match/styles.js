import styled from 'styled-components'


export const Box = styled.div `
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 20rem;
        height: 3rem;
        border-radius: 8px;
        background-color: #f1f2f6;
        border: none;
        text-align: initial;
        padding-left: 1rem;
        margin-top: 2rem;
        
    }
`

export const Card = styled.div `
    display: flex;
    position: relative;
    top: 20px;
    flex-direction: column;
    width: 20rem;
    height: 27rem;
    margin-top: 1rem;
    border-radius: 8px;
    background-color: #f1f2f6;
`

export const Title = styled.div `
    display: flex;
    justify-content: space-around;
    height: 3rem;
    align-items: center;

    h1 {
        font-size: 1rem;
    }

    p {
       font-size: 0.8rem;
    }
`

export const Btn = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 2rem;
    border-radius: 4px;
    background-color: #ffb8b8;
    color: red;
`


export const Teams = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 8rem;
`

export const TeamLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-size: 1rem;
    }

    img {
        height: 2.5rem;
        width: 2rem;
    }
`

export const ScoreBoard = styled.div`
    display: flex;
    flex-direction: row;
`

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 2rem;

`

export const WatchBtn = styled.div`
    background-color: #6c5ce7;
    width: 8rem;
    height: 2rem;
    border-radius: 4px;
    color: white;

    p {
       text-align: center;
       padding-top: 0.3rem;
    }
`

export const BetBtn = styled.div`
    background-color: #dfe6e9;
    width: 4rem;
    height: 2rem;
    border-radius: 4px;

    p {
       text-align: center;
       padding-top: 0.3rem;
    }
`

export const NextMatch = styled.div `

    margin: 1.5rem 0 0 1rem;

    h1 {
        font-size: 1rem;
    }

    h3 {
       font-size: 0.8rem;
    }

    p {
        font-size: 0.8rem;
        margin-top: 1rem;
        word-spacing: 1rem;
    }

    
`