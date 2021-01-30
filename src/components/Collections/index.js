import React from 'react'

import {Container, Navigation, Card, Cards} from './styles'

import festivalImg from '../../assets/festival.jpg'

import tftImg from '../../assets/tft.jpg'

import pandaImg from '../../assets/panda.jpg'

import taticsImg from '../../assets/tatics.jpg'

function Collection() {
    return(
        <Container>
            <Navigation>
                <h2>news</h2>
                <button>Popular</button>
            </Navigation>
            <Cards>
                <Card>
                    <img src={festivalImg} alt="festival tft"/>
                    <h3>Festival of Beasts</h3>
                    <p>Vektora gaming</p>
                </Card>
                <Card>
                    <img src={tftImg} alt="festival tft"/>
                    <h3>LOL Talk</h3>
                    <p>Vektora gaming</p>
                </Card>
                <Card>
                    <img src={pandaImg} alt="festival tft"/>
                    <h3>Explanner</h3>
                    <p>Vektora gaming</p>
                </Card>
                <Card>
                    <img src={taticsImg} alt="festival tft"/>
                    <h3>Patch Notes</h3>
                    <p>Vektora gaming</p>
                </Card>
            </Cards>
        </Container>
    )
}

export default Collection