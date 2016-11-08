import Backbone from 'backbone';
import Card from './components/Cards';
import React from 'react';
import ReactDom from 'react-dom';
import data from './data';
// import Login from './components/Login';

var container = document.getElementById('container');
const Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'login': 'login',
        'signup': 'signup',
        'cardpage/:player': 'cardpage'

    },

    login() {
        // React.render(<Login login={data}/>, container)
    },

    signup() {

    },

    cardpage(player) {
      var playerData = data[player];
      ReactDom.render(<Card card={playerData}/>, container);

    }
});

export default new Router();
