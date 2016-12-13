import React from 'react';

const Nav = React.createClass({
      render() {
        return (
          <nav>
            <a href="#cardpage/1">Lebron James</a>
            <a href="#cardpage/2">Dwayne Wade</a>
            <a href="#cardpage/3">Demarcus Cousins</a>
            <a href="#cardpage/4">Russell Westbrook</a>
            <a href="#cardpage/5">Kevin Durant</a>
            <a href="#createCard">Create new Card!</a>

          </nav>
        );
      }
    });
export default Nav;
