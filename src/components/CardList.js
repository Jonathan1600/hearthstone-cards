import React from 'react';
import './CardList.css';

const Card = ({ card }) => {
    if (!card.image) return null;
    return (
        <div className="card-item">
            <img className="card-img" src={card.image} alt={card.name} />
            <div className="card-info">
                <h2 className="card-name">{card.name}</h2>
                <div className="card-meta">
                    {card.manaCost !== undefined && <span className="card-mana">Mana: {card.manaCost}</span>}
                    {card.type && <span className="card-type">{card.type}</span>}
                </div>
                {card.text && <div className="card-desc" dangerouslySetInnerHTML={{ __html: card.text }} />}
            </div>
        </div>
    );
};

const CardList = (props) => {
    const cards = Array.isArray(props.cards.cards) ? props.cards.cards : [];
    return (
        <div className="card-list-grid">
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
    );
};

export default CardList;