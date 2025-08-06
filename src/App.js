import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import './normalize.css'
import './skeleton.css'
import { connect } from "react-redux"
import { fetchData } from "./store"
import Loader from "react-loader-spinner";
import CardList from './components/CardList';

const App = (props) => {
  const { fetchData } = props;
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetchData();
  }, [fetchData])
  const cardsFetchData = props.cards

  const filteredCards = {
    ...props.cards,
    cards: Array.isArray(props.cards.cards)
      ? props.cards.cards.filter(card =>
          card.name && card.name.toLowerCase().includes(filter.toLowerCase())
        )
      : []
  };

  return (
    <div className="App">
      {props.error ? <p style={{ color: "red" }}>{props.error}</p> : null}
      {props.isLoading || (cardsFetchData.cards && cardsFetchData.cards.lenght < 1)  ? <Loader
        className={"loader"}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> :
        <div className={"container"} id={"display"}>
          <div id={"bgImg"}></div>
          <header className="main-header">
            <h1>Hearthstone Card Explorer</h1>
            <p className="subtitle">Browse the basic set of Hearthstone cards</p>
          </header>
          <div className="card-filter-bar">
            <input
              type="text"
              className="card-filter-input"
              placeholder="Filter by card name..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
          </div>
          <CardList cards={filteredCards} />
          <p>Made by: Jonathan Calderon</p>
        </div>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    cards: state.cards,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchData })(App);

