import React from 'react'
import SideNav from './SideNav/sideNav'
import './body.css'
import CardUi from './Card/card'

const Body = () => {
    return (
        <div className="body-ui">
            <div className="body-left">
                <SideNav />
            </div>
            <div className="body-right">
                <CardUi/>
                <div>
                    <CardUi/>
                </div>
            </div>
        </div>
    )
}

export default Body
