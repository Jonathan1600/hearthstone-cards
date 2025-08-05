import React, { useState } from 'react';
import './CardList.css';

const Card = ({ card, onClick }) => {
    if (!card.image) return null;
    return (
        <div className="card-item" onClick={() => onClick(card)} tabIndex={0} role="button" aria-label={`Zoom in on ${card.name}`}> 
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

const CardZoomModal = ({ card, onClose }) => {
    if (!card) return null;
    return (
        <div className="card-zoom-overlay" onClick={onClose}>
            <div className="card-zoom-modal" onClick={e => e.stopPropagation()}>
                <button className="card-zoom-close" onClick={onClose} aria-label="Close zoomed card">&times;</button>
                <img className="card-zoom-img" src={card.image} alt={card.name} />
                <div className="card-zoom-info">
                    <h2 className="card-name">{card.name}</h2>
                    <div className="card-meta">
                        {card.manaCost !== undefined && <span className="card-mana">Mana: {card.manaCost}</span>}
                        {card.type && <span className="card-type">{card.type}</span>}
                    </div>
                    {card.text && <div className="card-desc" dangerouslySetInnerHTML={{ __html: card.text }} />}
                </div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    const cards = Array.isArray(props.cards.cards) ? props.cards.cards : [];
    const [zoomCard, setZoomCard] = useState(null);

    return (
        <>
            <div className="card-list-grid">
                {cards.map(card => <Card key={card.id} card={card} onClick={setZoomCard} />)}
            </div>
            <CardZoomModal card={zoomCard} onClose={() => setZoomCard(null)} />
        </>
    );
};

export default CardList;