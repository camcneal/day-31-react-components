import React from 'react';
import Nav from './nav';

const CreateCard = React.createClass({
  render(){
    return (
      <div className="create-card">
        <form className="card-create">
          <input className="picture" type="text" placeholder="photo url"/>
          <input className="name" type="text" placeholder="name"/>
          <input className="nickName" type="text" placeholder="nickName"/>
          <input className="age" type="number" placeholder="age"/>
          <input className="number" type="number" placeholder="Number"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
});
export default CreateCard;
