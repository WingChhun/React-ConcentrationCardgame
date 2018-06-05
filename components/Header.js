import React, {Component} from 'react';
import propTypes from 'prop-types';
const Header = ({
    cardPile = null,
    _shuffleDeck
}) => {
    return (
        <div>   
         <h1 >New Game</h1>
      
        
        </div>
    )
}

export default Header;

//! PropTypes check
Header.propTypes = {
    cardPile: propTypes.array.isRequired,
    _shuffleDeck: propTypes.func.isRequired

};