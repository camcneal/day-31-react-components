import React from 'react';
import ReactDom from 'react-dom';
import Nav from './nav';

const Login = React.createClass({
      render() {
        return (
          <div>
          <form className="login">
            <input type="text"  placeholder="Email Address"/>
            <input type="text"  placeholder="Password"/>
            <input type="Submit" value="Login"/>
          </form>
          Not registered? <a href="#signup">Sign Up!</a>

          </div>
        );
      }
    });
export default Login;
