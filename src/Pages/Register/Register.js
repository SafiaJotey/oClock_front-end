import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Register.css"
import useFirebase from './../../Hooks/useFirebase';


const Register = () => {
    return (
        <div className="register container">
        <h3>Please Register</h3>
        <form className='my-5'>
        
        <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
        
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">Password</label>
            <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

<button type="submit" className="btn btn-primary">Login</button>
<span> <Link to="/login">Login if already have an accaount</Link></span>
</form>


</div>
    );
};

export default Register;