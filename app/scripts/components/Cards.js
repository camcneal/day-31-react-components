import React from 'react';
import Nav from './nav';

const Card = React.createClass({
      render() {
        return (
              <div className="Card">
              <Nav/>
              <img src="#" />
              <h3>{this.props.card.name}</h3>
              <span className="nickName">{this.props.card.nickname}</span>
              <span className="Age">{this.props.card.age}</span>
              <span className="City">{this.props.card.city}</span>
              <span className="number">{this.props.card.number}</span>

              </div>
        )
      }
});
export default Card;
