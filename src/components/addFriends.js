import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


 const AddFriends = () => {

    const { push } = useHistory();

    const [form, setForm] = useState({
        name: 'name',
        email: 'email@email.com'
    });
    
   const handleChange = e => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      });
    }

    const submit = e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', form, 
            {
                headers: {
                    authorization: token
                }
            })
          .then(resp=> {
            push('/friends');
          })
          .catch(err=> {
            console.log(err);
          });
      };
      
    
        return (
            <div>
                <h2>Add Friend</h2>
                <div>
                    <form onSubmit={submit}>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder='name'
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='email'
                    />
                    <button>Submit</button>
                    </form>
                </div>
            </div>
        )
      
    };


 export default AddFriends;