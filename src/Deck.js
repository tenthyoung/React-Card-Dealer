import React, { Component } from 'react';
import './Deck.css';
import Card from './Card';


const API_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/';

class Deck extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             deck_id: null,
             cards: [],
             numCards: 0
        }

        this.drawCard = this.drawCard.bind(this);
    }

    async componentDidMount() {
        // We need to store the deck_id from the Cards API 
        // into the state
        let deck = await fetch(API_URL);
        let json = await deck.json();
        this.setState({deck_id: json.deck_id});
    }

    async drawCard() {
        if (this.state.numCards < 52) {
            let deck_id = this.state.deck_id;
            let response = await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`);
            let responseObj = await response.json();
            this.setState({ cards: [...this.state.cards, responseObj.cards[0] ], numCards: this.state.numCards + 1});
        } else {
            console.log('You already drew all the cards, dude');
        }
    }
    
    render() {
        console.log(this.state);

        let cards = this.state.cards.map(item => {
            console.log(item);
            return <Card 
                        imgSrc={item.image} 
                        key={item.code} 
                        id={item.code}
                        alt={item.code}
                        />
        })

        return (
            <div className="Deck">
                <button onClick={this.drawCard} >Click me!</button>

                {cards}
            </div>
        );
    }
}

export default Deck;