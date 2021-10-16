import React from 'react'
import CardUi from './Card/card'
import SideNav from './SideNav/sideNav'
import './body.css'

const Body = () => {
    return (
        <div className="body-ui">
            <div className="body-left">
                <SideNav />
                <div className="body-right">
                    <CardUi />
                </div>
            </div>
        </div>
    )
}

export default Body
