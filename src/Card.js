import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        let p = this.props;
        return (
            <div className="Card">
                <img key={p.key} id={p.id} src={p.imgSrc} alt={p.alt} />
            </div>
        );
    }
}

export default Card;