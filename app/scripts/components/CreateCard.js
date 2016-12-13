import React from 'react';
import Nav from './nav';

const CreateCard = React.createClass({
  render(){
    return (
      <div className="createCard">
        <Nav/>
        <form className="card-create">
          <input className="Picture" type="text" placeholder="photo url"/>
          <input className="Name" type="text" placeholder="Name"/>
          <input className="nickName" type="text" placeholder="nickName"/>
          <input className="Age" type="number" placeholder="Age"/>
          <input className="Number" type="number" placeholder="Number"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
});
export default CreateCard;
