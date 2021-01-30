import React from 'react'

import {Box, Card, Title, Btn, Teams, TeamLogo, ScoreBoard, Options, WatchBtn, BetBtn, NextMatch} from './styles'

import painLogo from '../../assets/pain.png'
import cnbLogo from '../../assets/cnb.png'

function Match() {
    return(
        <Box>
            <button>Match League Of Legends</button>
            <Card>
                    <Title>
                        <div>
                            <h1>League of legends</h1>
                            <p>Group stage - Matchday 1 of 5</p>
                        </div>
                        <Btn>Live</Btn>
                    </Title>
                    <Teams>
                            <TeamLogo>
                                <img src={painLogo} alt=""/>
                                <h1>Pain</h1>
                            </TeamLogo>
                            <ScoreBoard>
                                <h1>2 x 2</h1>
                            </ScoreBoard>
                            <TeamLogo>
                                <img src={cnbLogo} alt=""/>
                                <h1>CNB</h1>
                            </TeamLogo>
                    </Teams>
                    <Options>
                        <WatchBtn><p>watch</p></WatchBtn>
                        <BetBtn><p>bet</p></BetBtn>
                    </Options>
                    <NextMatch>
                        <h1>Next match</h1>
                        <h3>Today</h3>
                        <p>10:45  -  Red  vs  flamengo</p>
                        <p>10:45 - Red vs flamengo</p>
                        <p>10:45 - Red vs flamengo</p>
                        <p>10:45 - Red vs flamengo</p>
                    </NextMatch>
            </Card>
        </Box>
    )   
}

export default Match