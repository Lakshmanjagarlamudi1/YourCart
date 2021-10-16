import React from 'react'
import * as GiIcons from 'react-icons/gi'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'

export const SidenavBardata = [
    {
        title: "Fashion",
        path: "/Fashion",
        icon:<GiIcons.GiClothes/>,
        cName:'nav-text'
    },
    {
        title: "T-Shirts",
        path: "/T-Shirts",
        icon:<FaIcons.FaTshirt/>,
        cName:'nav-text'
    },
    {
        title: "Eye-glasses",
        path: "/Eye-glasses",
        icon:<FaIcons.FaEye/>,
        cName:'nav-text'
    },
    {
        title: "Footware",
        path: "/Footware",
        icon:<GiIcons.GiSonicShoes/>,
        cName:'nav-text'
    },
    {
        title: "Settings",
        path: "/Settings",
        icon:<AiIcons.AiFillSetting/>,
        cName:'nav-text'
    },
    {
        title: "Signout",
        path: "/Signout",
        icon:<GoIcons.GoSignOut/>,
        cName:'nav-text'
    },
]
