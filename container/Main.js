import React, {Component} from 'react';
import styled from 'styled-components';

//*Import Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "../components/Cards/CardList";

//*API URLS to remember
const API_NEW_DECK = "https://deckofcardsapi.com/api/deck/new/";
const API_SHUFFLE = "https://deckofcardsapi.com/api/deck/<<deck_id>>/shuffle/";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
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
        cards: []

    }

    //TODO: Lifecycle methods:
    componentWillMount()
    {
        //*Fetch new deck from API before component mounts
        fetch(API_NEW_DECK)
            .then(res => res.json())
            .then(deck => {
                this.setState({
                    ...this.state,
                    deck

                });
                console.log("API - New Deck", this.state.deck);
                return deck.deck_id;
            })
            .then(deckID => {
                //*Draw 52 cards to start game
                fetch(`${API_BASE_URL}${deckID}/draw/?count=52`)
                    .then(res => res.json())
                    .then(data => {
                        this.setState({
                            ...this.state,
                            cards: data.cards
                        });
                        console.log("API - Set Cards", this.state.cards);
                    })
                    .catch(e => console.log(e));

            })
            .catch(e => console.log(e));
        //*Debug

    }

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
        //* Pull from state and constructor
        const {deck, cards} = this.state;
        const setCards = this._setCards;
        return (

            <div className="main">
                <h1>
                    React - Concentration Card Game</h1>
                <a onClick={this._shuffleDeck}>TestShuffle</a>
                <Header/>
                <CardList deck={deck} cards={cards}/>
                <Footer/>
            </div>
        )
    }
}

export default Main;