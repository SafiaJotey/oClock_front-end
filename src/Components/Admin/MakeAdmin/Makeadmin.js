
import { TextField } from '@mui/material';
import React,{useState} from 'react';
import { Alert, Button } from 'react-bootstrap';
import "./Makeadmin.css"

const Makeadmin = () => {

    const [email,setEmail]=useState('');
    const[success,setSuccess]=useState(false)
    const handleOnBlur =e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit=e=>{

        e.preventDefault();
        const user={email};
      
      fetch('http://localhost:5000/users/admin',{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.modifiedCount){
              console.log(data);
              setSuccess(true);
              
          }
      })
      }
    return (
        <div className="admin">
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
           <input onBlur={handleOnBlur} className="input-section" type="email" placeholder="Enter Email"></input>
           <button className="btn">Make admin</button>
           </form>
           {success && <p className="text-danger">Successfully make an admin</p>}
        </div>
    );
};

export default Makeadmin;