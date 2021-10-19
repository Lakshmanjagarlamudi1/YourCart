import { Link } from '@material-ui/core'
import React from 'react'
import { SidenavBardata } from './sidenavBardata'
import './SideNav.css'

const SideNav = () => {
    return (
        <div>
            <ul className="side-nav-lists">
                {SidenavBardata.map((item, index) => (
                    <li key={index} className={item.cName}>
                        <Link className="links" href={item.path}>
                            {item.icon}
                            <span className="title">{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SideNav
