import React, {Component} from 'react';
import styled from 'styled-components';

//*Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/Cards/CardList";

//*API URLS to remember
const API_NEW = "https://deckofcardsapi.com/api/deck/new/";
const API_SHUFFLE = "https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/";

/*
 TODO: Main
 TODO: Before component Mounts, request new deck, set state
 TODO: CardList - Use DeckID from state, draw Cards from cardlist
*/
class Main extends Component
{

    /*
  TODO: State
*/
    state = {

        deck: {},
        deckID: "",
        cards: {}
    }

    //TODO: Lifecycle methods:
    componentWillMount()
    {
        //*Fetch new deck from API
        fetch(API_NEW)
            .then(res => res.json())
            .then(deck => {
                this.setState({
                    ...this.state,
                    deck,
                    deckID: deck.deck_id
                });
                console.log("API - New Deck", this.state.deck);
            })
            .catch(e => console.log(e));
        //*Debug

    }
    componentDidMount()
    {}

    //! Custom Functions

    _shuffleDeck = () => {
        const deckID = this.state.deckID;
        fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)
            .then(res => res.json())
            .then(deck => {
                //*Update deck, deckId does not change
                this.setState({
                    ...this.state,
                    deck
                });
                console.log("_shuffleDeck - success", this.state);
            })
            .catch(e => console.log(e));
    }

    // !-- Render Method

    render()
    {
        return (

            <div className="main">
                <h1>
                    React - Concentration Card Game</h1>
                <a  onClick={this._shuffleDeck}>TestShuffle</a>
                <Header/>
                <CardList/>
                <Footer/>
            </div>

        )
    }

}

//*export
export default Main;