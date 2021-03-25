

const CardList = (props) => {
    return (
        <div className={"cardListDiv container"}>
            {props.cards.map(
                card => {
                    return card.img ? <img alt={card.name} key={card.cardId} src={card.img} className={"cardImg"} /> : null
                }
            )}
        </div >
    )
}

export default CardList