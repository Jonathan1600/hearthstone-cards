import React from 'react';
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
  useEffect(() => {
    fetchData();
    console.log(props)
  }, [fetchData])
  const cardsFetchData = props.cards

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
          <CardList cards={props.cards} />
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

