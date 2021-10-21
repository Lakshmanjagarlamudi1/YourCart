import { Link, Button } from '@material-ui/core'
import React, { useState } from 'react'
import * as FiIcons from 'react-icons/fi';
import { SidenavBardata } from './sidenavBardata'
import './SideNav.css'

const SideNav = () => {

    const [nameClass, setNameClass] = useState(false)

    return (
        <div>
            <Button
                style={{
                    marginLeft: '-20px',
                    display: nameClass ? 'block' : 'none'
                }}
                onClick={() => setNameClass(!nameClass)}>
                <FiIcons.FiChevronsRight
                    style={{
                        color: "#242B2E",
                        fontSize: "20px"
                    }} /></Button>

            <ul style={{
                marginLeft: '-50px',
                display: nameClass ? 'none' : 'block'
            }}>
                {SidenavBardata.map((item, index) => (
                    <li key={index} className={item.cName}>
                        <Link className="links" href={item.path}>
                            {item.icon}
                            <span className="title">{item.title}</span>
                        </Link>
                    </li>
                ))}
                <Button
                    onClick={() => setNameClass(!nameClass)}>
                    <FiIcons.FiChevronsLeft
                        style={{
                            color: "#242B2E",
                            fontSize: "20px"
                        }} /></Button>
            </ul>
        </div>
    )
}

export default SideNav
