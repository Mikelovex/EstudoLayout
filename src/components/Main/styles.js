import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
`

export const Container = styled.div`

`

export const SideBox = styled.div `
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    background-color: #6c5ce7;
    width: 70%;
    height: 30rem;
    display: flex;
    margin: 2rem 0 0 2rem;
    border-radius: 8px;

    img {
        height: 30rem;
    }

    button {
        position: relative;
        top: 80px;
        width: 8rem;
        height: 2.5rem;
        border-radius: 8px;
        border: none;
        color: #6c5ce7
    }

`

export const BoxRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:  #ffffff;
`