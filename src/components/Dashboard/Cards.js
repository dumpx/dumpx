import React from 'react'
import { Card, CardsContainer } from './styles';
import cardData from './CardData';

const Cards = () => {

    return (
        <CardsContainer>
            {cardData.map((item) => {
                return (
                    <Card key={item.title} style={{ backgroundColor: item.color }}>
                        <h3>{item.titleMetric}</h3>
                        <h3>{item.title}</h3>
                    </Card>
                )
            })}
        </CardsContainer>
    )
}

export default Cards