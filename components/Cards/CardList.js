import React, {Component} from 'react';
import propTypes from 'prop-types';

//*Import components
import Card from "./Card";

//*API URL for reference
const API_DRAW_CARDS = "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=52";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
/*
 TODO: CardList
*/

const CardList = ({deck, card}) => {
    return (
        <h1>CardList CCOmponent</h1>

    );
}
export default CardList;

//! - Proptype check
CardList.propTypes = {

    deck: propTypes.shape({deck_id: propTypes.string, remaining: propTypes.number, shuffled: propTypes.bool, success: propTypes.bool}),
    cards: propTypes.array.isRequired
};