import React from 'react';

const CardList = (props) => {
    const cards = Array.isArray(props.cards.cards) ? props.cards.cards : [];

    console.log("Card List Props.cards:", cards, props)
    return (
        <div className={"cardListDiv container"}>
            {cards.map(
                card => {
                    console.log(card)
                    return card.image ? <img alt={card.name} key={card.id} src={card.image} className={"cardImg"} /> : null
                }
            )}
        </div >
    )
}

export default CardList