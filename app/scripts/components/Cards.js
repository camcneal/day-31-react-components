import React from 'react';
import Nav from './nav';

const Card = React.createClass({
      render() {
        console.log(this.props.card.img);

        return (
              <div className="card">
              <img src={this.props.card.img} />
              <h3>{this.props.card.name}</h3>
              <span className="nickName">{this.props.card.nickname}</span>
              <span className="age">{this.props.card.age}</span>
              <span className="city">{this.props.card.city}</span>
              <span className="number">{this.props.card.number}</span>

              </div>
        )
      }
});
export default Card;
