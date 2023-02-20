import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck } from 'react-icons/fa';

const AccountForms = () => {
    let [login, goLogin] = useState('');

    const url = "http://localhost:4001/user";
  
    /* SEND DATA TO BACKEND  */
    const loginSubmit = (e) => {
        console.log(e.target.username.value);
        console.log(e.target.password.value);
        e.preventDefault();
        axios.post(`${url}`, {
           username:  e.target.username.value,
           password:  e.target.password.value
        }).then((response) => {
            console.log(response);
            document.cookie = response.data.length > 0 ? `user=${response.data[0].id}`: '';
            response.data.length > 0 ? window.location.href = '/profile' : goLogin('Invalid Credentials') ;
        })
    }


    return (
        
    <div className="col-7 login mt-5">
        <div className="row">
            <div className="col align-self-center text-center p-5">
                <h1 className="text-dark">Login to your Account</h1>
                <form onSubmit={loginSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                        <input type="text" className="form-control w-50 m-auto" name="username" aria-describedby="emailHelp" />
                
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                        <input type="password" className="form-control w-50 m-auto" name="password" /> <br/>
                        <button type="submit" className="btn btn-outline-light signbtn p-3 w-50">
                    LOGIN
                </button>
                    </div>
                </form>
                <p className="text-danger">{login}</p>
            </div>
            
        </div>
      
    </div>
    )
}

export default AccountForms;