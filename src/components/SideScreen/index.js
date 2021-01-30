import React from 'react'

import {Navigation} from './stlyes'

import {AiFillHome, AiFillPlusSquare, AiFillSchedule, AiFillSetting} from 'react-icons/ai'
import {BiTrendingUp, BiMessageSquareDetail} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {CgGames} from 'react-icons/cg'

function SideScreen() {
    return(
        <Navigation>
            <p><CgGames size={50} /></p>
            <ul>
                <li><span><AiFillHome size={20}/></span>Home</li>
                <li> <span><BiTrendingUp size={20}/></span> Trending</li>
                <li> <span><AiFillPlusSquare size={20}/></span> Match</li>
                <li> <span><FaUserFriends size={20}/></span> Friends</li>
                <li> <span><AiFillSchedule size={20}/></span> Schedule</li>
                <li> <span><BiMessageSquareDetail size={20}/></span> Messages</li>
                <li> <span><AiFillSetting size={20}/></span> Settings</li>
                <li> <span><FiLogOut size={20} /></span> LogOut</li>
            </ul>

            <button>Fresh Prince Rx</button>
        </Navigation>
    )
}


export default SideScreen