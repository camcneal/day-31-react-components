import react from 'react';
import reactDom from 'react-dom';

const Login = React.createaClass({
      render() {
        return (
          <form class="Login">
            <input type="text"  placeholder="Email Address">
            <input type="text"  placeholder="Password">
            <input type="button" value="SUBMIT">
          </form>
        )
      }
    });
export default Login;
