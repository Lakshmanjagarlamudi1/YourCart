import React from 'react'
import SideNav from './SideNav/sideNav'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardData } from './Card/cardData'
import './body.css'

const Body = () => {
    return (
        <div className="body-ui">
            <div className="body-left">
                <SideNav />
                <div className="body-right">
                    <div className="card">
                    <Card style={{ width: '18rem' }}>
                        {CardData.map((item, index) => {
                            return (
                                <div className={item.cName}>
                                    {item.image}
                                    <Card.Body>
                                        <Card.Title className="card-title">{item.title}</Card.Title>
                                        <Card.Text>{item.text}</Card.Text>
                                        <Button variant="primary">{item.button}</Button>
                                    </Card.Body>
                                </div>
                            )
                        })}
                    </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
