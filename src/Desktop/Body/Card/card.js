import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardData } from './cardData'
import './card.css'

const CardUi = () => {
    return (
        <div className="crad-ui">
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
    )
}

export default CardUi
