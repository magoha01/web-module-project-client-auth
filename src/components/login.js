import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
      credentials: {
        username: 'bloom',
        password: 'tech'
      }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

      login = e => {
        e.preventDefault();
        console.log(this.state.credentials);
        //1. make an axios post call to localhost:5001/api/login. Make sure that we pass in our credentials.
        //2. if the call is successful, save the token returned to localStorage
        //3. if the call fails console.log the error.
        axios.post('http://localhost:9000/api/login', this.state.credentials)
          .then(resp=> {
            localStorage.setItem("token", resp.data.token);
            localStorage.setItem("username", resp.data.username);
            //this.props.history.push('/protected');
          })
          .catch(err=> {
            console.log(err);
          });
      };

      render() {
        return (

            <div>
                <h2>Login</h2>
                <div>
                    <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                    </form>
                </div>
            </div>
        );
      }
    };

    export default Login;