import React from 'react'
import SideScreen from '../SideScreen'
import Collection from '../Collections'
import Header from '../Header'
import Match from '../Match'

import {Wrapper, Box, BoxRight, Container,SideBox} from './styles'

import JinxImg from '../../assets/jinx.png'

function Main() {
    return(
        
        <Wrapper>
            <SideScreen />
                <Container>
                <Header />
                    <SideBox>
                        <Box>
                            <img src={JinxImg} alt="jinx league of legends"/>
                            <BoxRight>
                                <h1>Butterfly VS Peacok - ESL Pro League Season 16 - Playoffs</h1>
                                <p>League Of Legends - indonesia</p>
                                <button>Watch</button>
                            </BoxRight>
                        </Box>
                        <Match />
                    </SideBox>
                    <Collection />
                    
                </Container>
        </Wrapper>
    )
}

export default Main