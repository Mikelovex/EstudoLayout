import React from 'react'

import {Navigation, Icons } from './styles'

import {IoIosNotificationsOutline} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import jannaImg from '../../assets/janna.jpeg'

function Header() {
    return(
        <Navigation>
            <BsSearch size={18}/><input placeholder="find a match"/>
            <Icons>
                <p><IoIosNotificationsOutline  size={20}/></p>
                <a href="/"><img src={jannaImg} alt="janna lol"/></a>
            </Icons>
        </Navigation>
    )
}

export default Header