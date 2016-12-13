import Backbone from 'backbone';
import Card from './components/Cards';
import Login from './components/Login';
import SignUp from './components/SignUp';
import React from 'react';
import ReactDom from 'react-dom';
import data from './data';
import CreateCard from './components/CreateCard';

// import Login from './components/Login';

var container = document.getElementById('container');
const Router = Backbone.Router.extend({
    routes: {
        '': 'login',
        'signup': 'signup',
        'cardpage/:player': 'cardpage',
        'createCard':'createCard'

    },

    login() {
        ReactDom.render(<Login/>, container)
    },

    signup() {
      ReactDom.render(<SignUp/>, container)

    },

    cardpage(player) {
      let playerData = data[player-1];
      console.log(playerData);
      ReactDom.render(<Card card={playerData}/>, container);

    },
    createCard(){

      ReactDom.render(<CreateCard/>, container)

    }
});

export default new Router();
