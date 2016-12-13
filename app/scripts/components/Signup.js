import React from 'react';
import ReactDom from 'react-dom';

const Login = React.createClass({
      render() {
        return (
          <form className="SignUp">
            <input type="text"  placeholder="Name"/>
            <input type="text"  placeholder="Email Address"/>
            <input type="text"  placeholder="Password"/>
            <input type="button" value="SignUp"/>
          </form>
        )
      }
    });
export default Login;
