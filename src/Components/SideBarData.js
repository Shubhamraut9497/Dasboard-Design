import React from 'react'
import {AiOutlineHome,AiOutlineFolder} from 'react-icons/ai'
import {GiGraduateCap} from 'react-icons/gi';
import {RiGroupLine} from 'react-icons/ri';
import {CgShapeRhombus,CgProfile} from 'react-icons/cg';
import {BsChatLeftText} from 'react-icons/bs';
import {CiSettings} from 'react-icons/ci';
import {BiBuildings} from 'react-icons/bi';

export const SideBarData=[
    {
        title:'DASHBOARD',
        path:'/',
        icon: <AiOutlineHome/>,
        clName:'nav-text',
    },
    {
        title:'KNOWLEDGE',
        path:'/knowledge',
        icon: <GiGraduateCap/>,
        clName:'nav-text'
    },
    {
        title:'MEMBERS',
        path:'/members',
        icon: <RiGroupLine/>,
        clName:'nav-text'
    },
    {
        title:'TEAMS',
        path:'/teams',
        icon: <CgShapeRhombus/>,
        clName:'nav-text'
    },
    {
        title:'VAULT',
        path:'/vault',
        icon: <AiOutlineFolder/>,
        clName:'nav-text'
    },
    {
        title:'CHAT',
        path:'/chat',
        icon: <BsChatLeftText/>,
        clName:'nav-text'
    },

]