import styled from 'styled-components'


export const Navigation = styled.div`
    width: 84vw;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dfe6e9;

    svg {
        position: relative;
        top: 2.5rem;
        left: 5rem;
    }

    input {
        width: 70rem;
        border: none;        

        &::placeholder {
            font-size: 1rem;
        }

    }

    a {
        img {
            height: 3rem;
            border-radius: 8px;
        }
    }


    @media (max-width: 1680px) {
        
        input {
            width: 60rem;
        }

        svg {
            left: 2rem;
        }
    }




`

export const Icons = styled.div`

    width: 14rem;
    display: flex;
    align-items:center;

    a {
        img {
            margin-left: 2rem;

        }
    }

    p {
        svg {
            position: relative;
            top: 0%;
            left: 0;
            width: 2.8rem;
            height: 2.8rem;
            background-color: #f1f2f6;
            border-radius: 4px;
        }
    }

`