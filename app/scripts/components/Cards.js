import React from 'react';


const Card = React.createClass({
      render() {
        return (
              <div className="Card">
              <nav></nav>
              <img src="#" />
              <h3>{this.props.card.name}</h3>
              <span>{this.props.card.nickname}</span>
              <span>{this.props.card.age}</span>
              <span>{this.props.card.city}</span>
              <span>{this.props.card.number}</span>

              </div>
        )
      }
});
export default Card;
