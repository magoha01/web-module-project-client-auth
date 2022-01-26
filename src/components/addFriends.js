import React, from "react";i8
import axios from 'axios';



 class AddFriends extends React.Component {

    state = {
        newFriend:{
            name: 'name',
            email: 'email@email.com'
        } 
      };
    
    handleChange = e => {
        this.setState({
            newFriend:{   
                ...this.state.newFriend,
                [e.target.name]: e.target.value
            } 
        });
    };

    submit = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/friends', this.state.newFriend)
          .then(resp=> {
            localStorage.setItem("token", resp.data.token);
            this.props.history.push('/friends');
          })
          .catch(err=> {
            console.log(err);
          });
      };
      
      render(){
        return (
            <div>
                <h2>Add Friend</h2>
                <div>
                    <form onSubmit={this.submit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                        placeholder='name'
                    />
                    <input
                        type="email"
                        name="email"
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                        placeholder='email'
                    />
                    <button>Submit</button>
                    </form>
                </div>
            </div>
        )
      }
    };


 export default AddFriends;